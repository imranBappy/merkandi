"use client";
import {
  useGetOrdersQuery,
  useUpdateOrderMutation,
} from "@/redux/features/order/orderApi";
import React from "react";
import DataTable from "react-data-table-component";
import moment from "moment";
import Link from "next/link";
import Button from "../common/Button/Button";

const ReceiveOrderTable = () => {
  const { data, isLoading } = useGetOrdersQuery({ userType: "owner" });

  const [updateOrder, { isLoading: isUpdating }] = useUpdateOrderMutation();

  const handleUpdateOrder = async (id, status) => {
    await updateOrder({ id, body: { status } });
  };

  const columns = [
    {
      name: "ID",
      selector: (row, index) => index + 1,
      width: "50px",
    },
    {
      name: "Customer",
      selector: (row) => row?.user?.name,
      width: "150px",
    },
    {
      name: "Product",
      selector: (row) => (
        <Link className=" text-blue-700" href={`/product/${row?.product?._id}`}>
          {row?.product?.title}
        </Link>
      ),
      width: "250px",
    },
    {
      name: "Quantity",
      selector: (row) => row?.quantity,
      width: "150px",
    },
    {
      name: "Status",
      width: "150px",

      cell: (row) => (
        <div className="flex items-center gap-2">
          <select
            disabled={isUpdating}
            onChange={(e) => handleUpdateOrder(row?._id, e.target.value)}
            value={row?.status}
            className={`border border-gray-300 rounded-md py-1 px-2 `}
          >
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
      ),
    },
    {
      name: "Date",
      selector: (row) => moment(row?.createdAt).fromNow(),
      width: "150px",
    },
    {
      name: "Contact",
      cell: (row) => (
        <div className="flex items-center gap-1 flex-col py-2">
          <Link href={`/dashboard/shopping/${row?._id}`}>
            <Button
              className={"w-22 bg-zinc-600 hover:bg-zinc-900 "}
              label={"Show"}
            />
          </Link>
          <Button className={"w-22"} label={"Chat"} />
        </div>
      ),
      width: "150px",
    },
  ];

  return (
    <div>
      <h1 className="text-md font-semibold mb-2 block capitalize ">
        Receive Orders
      </h1>
      <DataTable
        disabled={isLoading}
        columns={columns}
        data={data?.orders || []}
        pagination
      />
    </div>
  );
};

export default ReceiveOrderTable;
