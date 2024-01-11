"use client";

import CudAddress from "@/components/CudAddress/CudAddress";
import EmptyOrder from "@/components/Order/EmptyOrder";
import CartItem from "@/components/Order/OrderItem";
import Loading from "@/components/common/Loader/Loading";
import Toaster from "@/components/common/Toaster/Toaster";
import { useGetCountriesQuery } from "@/redux/features/country/countryApi";
import { useOrderAddMutation } from "@/redux/features/order/orderApi";
import { addOrder } from "@/redux/features/order/orderSlice";
import { useGetStoresQuery } from "@/redux/features/store/storeApi";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const Page = () => {
  const { order } = useSelector((state) => state.order);
  const dispatch = useDispatch();
  const [selected, setSelected] = useState([]);
  const [payload, setPayload] = useState({
    address: "",
    products: [],
    total: 0,
  });

  const router = useRouter();
  const { data, error, isLoading } = useGetCountriesQuery();
  const { data: storeData } = useGetStoresQuery({
    type: "shipping",
  });
  const { data: storeData1 } = useGetStoresQuery({
    Default: true,
  });

  const [
    postOrder,
    {
      isLoading: orderIsLoading,
      isError: orderIsError,
      error: orderError,
      isSuccess: orderIsSuccess,
      data: orderData,
    },
  ] = useOrderAddMutation();

  const allAddress = storeData?.stores?.concat(storeData1?.stores || []);
  useEffect(() => {
    const order = JSON.parse(localStorage.getItem("order") || "[]");
    if (order) {
      dispatch(addOrder(order));
    }
  }, [dispatch, order]);

  useEffect(() => {
    if (orderIsSuccess) {
      Toaster({
        type: "success",
        message: "Order successfully",
      });
      dispatch(addOrder([]));
      setSelected([]);
      setPayload({
        address: "",
        products: [],
        total: 0,
      });
      router.push("/order");
    }
  }, [orderIsSuccess, dispatch, router]);

  const submitOrder = () => {
    if (!payload.address) {
      Toaster({
        type: "error",
        message: "Please select address",
      });
      return;
    }
    if (selected.length === 0) {
      Toaster({
        type: "error",
        message: "Please select product",
      });
      return;
    }

    const total = order.reduce((acc, item) => {
      if (selected.includes(item._id)) {
        return acc + item.quantity;
      }
      return acc;
    }, 0);

    const productsWithQuantity = order.map((item) => {
      if (selected.includes(item._id)) {
        return {
          product: item._id,
          quantity: item.quantity,
        };
      }
    });

    postOrder({
      ...payload,
      products: productsWithQuantity,
      total,
    });
  };

  // rander content
  if (isLoading) return <Loading />;
  if (error) return <div>{error}</div>;
  if (order.length === 0) return <EmptyOrder />;
  return (
    <div className="max-w-screen-xl mx-auto py-4 md:px-8">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>

      <div>
        {order?.map((item) => (
          <CartItem
            selectedState={[selected, setSelected]}
            key={item._id}
            item={item}
          />
        ))}
      </div>
      <div className="flex justify-end items-center gap-4">
        {allAddress?.map((store) => (
          <CudAddress
            onClick={() => {
              setPayload({
                ...payload,
                address: store._id,
              });
            }}
            key={store._id}
            storeData={store}
            countries={data?.countries || []}
          />
        ))}
      </div>

      <div className="flex justify-center my-5 items-center gap-4">
        <button
          onClick={submitOrder}
          className=" bg-yellow-600 text-white px-4 py-2"
        >
          Submit Order
        </button>
      </div>
    </div>
  );
};

export default Page;
