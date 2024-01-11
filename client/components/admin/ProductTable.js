"use client";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
  useUpdateProductMutation,
} from "@/redux/features/product/productApi";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Link from "next/link";
import Image from "next/image";
import { useGetCategoriesQuery } from "@/redux/features/category/categoryApi";
import Loading from "../common/Loader/Loading";
import { useGetBrandsQuery } from "@/redux/features/brand/brandApi";

const ProductTable = (props) => {
  const { data: categoriesData } = useGetCategoriesQuery();
  const { data: brandsData } = useGetBrandsQuery();
  const [deleteProduct, { isLoading: deleteLoading }] =
    useDeleteProductMutation();
  const [updateProduct, { isLoading: updateLoading }] =
    useUpdateProductMutation();

  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [page, setPage] = useState(1);
  const [term, setTerm] = useState("");
  const [secarch, setSearch] = useState("");
  const [user, setUser] = useState("");

  const { categories, total } = categoriesData || { categories: [], total: 0 };
  const { brands, total: brandsTotal } = brandsData || { brands: [], total: 0 };

  const { data, isLoading } = useGetProductsQuery(
    {
      page,
      category,
      brand,
      term,
      user,
    },
    {
      refetchOnMountOrArgChange: true,
      refetchOnReconnect: true,
      refetchOnWindowFocus: true,
    }
  );

  const [itemsPerPage, setItemsPerPage] = useState(20);
  console.log({ user });
  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setTerm(secarch);
    }, 500);
    return () => {
      clearTimeout(timeOutId);
    };
  }, [secarch]);

  useEffect(() => {
    if (props.user) {
      setUser(props.user);
    }
  }, [props.user]);
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };
  const handleBrandChange = (e) => {
    setBrand(e.target.value);
  };

  const statusUpdate = (item) => {
    const newProduct = {
      ...item,
      status: item.status === "active" ? "inactive" : "active",
    };
    updateProduct({ id: newProduct._id, body: newProduct });
  };

  const handleDelete = (id) => {
    deleteProduct(id);
  };

  if (isLoading) {
    return <Loading />;
  }
  const columns = [
    {
      name: "ID",
      cell: (row, index) => index + 1,
      width: "60px",
    },
    {
      name: "Image",
      cell: (row) => (
        <div className="flex items-center gap-4 ">
          <Image
            width={40}
            height={40}
            src={row?.image?.url}
            alt={row?.image?.url}
            className="w-10 h-10 rounded-full"
          />
        </div>
      ),
      width: "100px",
    },
    {
      name: "Title",
      selector: (row) => <p className="line-clamp-1">{row.title}</p>,
      width: "200px",
    },
    {
      name: "Price",
      selector: "price",
      sortable: true,
      width: "100px",
    },
    {
      name: "Brand",
      cell: (row) => row.brand.name,
      width: "150px",
    },
    {
      name: "Category",
      cell: (row) => row.category.name,
      width: "100px",
    },
    {
      name: "Status",
      cell: (row) => (
        <div className="flex items-center gap-4 ">
          <button
            disabled={updateLoading}
            onClick={() => statusUpdate(row)}
            className={`${
              row.status === "active" ? "bg-green-500" : "bg-red-500"
            } text-white px-2 py-1 rounded-md  capitalize 
              ${isLoading && "bg-gray-300"}
              `}
          >
            {row.status}
          </button>
        </div>
      ),
      width: "100px",
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex items-center gap-4 ">
          <Link
            href={`/admin/product/add?productId=${row._id} `}
            className=" w-10 bg-blue-500 text-white px-2 py-1 rounded-md"
          >
            Edit
          </Link>
          <button
            disabled={deleteLoading}
            onClick={() => handleDelete(row._id)}
            className={`w-14 text-white ${
              isLoading ? " bg-red-300 " : "bg-red-500 "
            }  px-2 py-1 rounded-md `}
          >
            Delete
          </button>
        </div>
      ),
      width: "100px",
    },
  ];
  return (
    <div className=" bg-white p-5 mt-5 ">
      <div className="flex items-center justify-between">
        <div className="mb-4 flex items-center">
          <div>
            <select
              onChange={handleCategoryChange}
              className="px-2 py-1.5 border border-black rounded outline-0 ml-2"
            >
              <option selected="selected" value="">
                Categories
              </option>
              {categories?.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))}
            </select>
            <select
              onChange={handleBrandChange}
              className="px-2 py-1.5 border border-black rounded outline-0 ml-2"
            >
              <option selected="selected" value="">
                Brands
              </option>
              {brands?.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Search..."
            className="px-2 py-1.5 border rounded outline-0 "
            value={secarch}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <DataTable
        columns={columns}
        data={data?.products || []}
        selectableRowsComponentProps={{
          selectAllRowsItem: true,
        }}
        pagination
        paginationPerPage={itemsPerPage}
        paginationRowsPerPageOptions={[10, 20, 50, 100]}
        paginationComponentOptions={{
          rowsPerPageText: "Rows per page:",
        }}
        highlightOnHover
      />
    </div>
  );
};

export default ProductTable;
