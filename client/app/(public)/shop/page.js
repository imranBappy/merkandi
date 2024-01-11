"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Accordion from "@/components/Accordion";
import ReadMore from "@/components/ReadMore";
import {
  useGetCategoriesQuery,
  useGetCategoryQuery,
} from "@/redux/features/category/categoryApi";
import { useGetShopMutation } from "@/redux/features/product/productApi";
import ProductCard from "@/components/Card/ProductCard";
import { useSearchParams } from "next/navigation";
import { useGetCountriesQuery } from "@/redux/features/country/countryApi";
import Loading from "@/components/common/Loader/Loading";
import { useGetProductsGroupQuery } from "@/redux/features/productGroup/productGroupApi";
import FilterLink from "@/components/Link/FilterLink";

export default function Login() {
  const searchParams = useSearchParams();
  const [isHidden, setIsHidden] = useState(true);

  const [category, setCategory] = useState("");
  const [productGroup, setProductGroup] = useState("");
  const [country, setCountry] = useState([]);
  const [label, setLabel] = useState([]);
  const [subcategory, setSubcategory] = useState("");

  const { data } = useGetCategoriesQuery();
  const { data: productGroupData } = useGetProductsGroupQuery();
  const [getProducts, { isLoading, data: productsData, isError }] =
    useGetShopMutation();
  const { data: countryData } = useGetCountriesQuery();

  const { data: categoryData } = useGetCategoryQuery(category, {
    skip: !category,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
    refetchOnWindowFocus: true,
  });

  console.log({ categoryData });

  useEffect(() => {
    getProducts({
      category,
      subcategory,
      productGroup,
      body: {
        country: country?.length > 0 ? country : undefined,
        label: label?.length > 0 ? label : undefined,
      },
      page: 1,
      limit: 10,
    });
  }, [category, subcategory, productGroup, country, label, getProducts]);

  useEffect(() => {
    if (searchParams.get("category")) {
      setCategory(searchParams.get("category"));
    } else {
      setCategory("");
    }

    if (searchParams.get("subcategory")) {
      setSubcategory(searchParams.get("subcategory"));
    } else {
      setSubcategory("");
    }

    if (searchParams.get("productGroup")) {
      setProductGroup(searchParams.get("productGroup"));
    } else {
      setProductGroup("");
    }
  }, [searchParams]);

  const toggleHidden = () => {
    setIsHidden(!isHidden);
  };

  const handleCountry = (id) => {
    const newCountry = [...country];
    const index = newCountry.indexOf(id);
    if (index > -1) {
      newCountry.splice(index, 1);
    } else {
      newCountry.push(id);
    }
    setCountry(newCountry);
  };

  const handleLabel = (id) => {
    const newLabel = [...label];
    const index = newLabel.indexOf(id);
    if (index > -1) {
      newLabel.splice(index, 1);
    } else {
      newLabel.push(id);
    }
    setLabel(newLabel);
  };

  const isSelect = (array, value) => {
    return array.indexOf(value) > -1 ? true : false;
  };

  return (
    <>
      {" "}
      <div className="w-full  max-w-screen-xl mx-auto py-8 md:px-8 bg-[#ececec]">
        <nav className="w-full">
          <ol className="list-reset flex">
            <li>
              <span className="mx-2 text-neutral-500 dark:text-neutral-400">
                /
              </span>
            </li>
            <li>
              <Link
                href="/"
                className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={`/shop?category=${categoryData?._id}`}
                className="mx-2 text-neutral-500 dark:text-neutral-400"
              >
                /
              </Link>
            </li>
            <li className="text-neutral-500 dark:text-neutral-400">
              {categoryData?.name || "Categories"}
            </li>
          </ol>
        </nav>

        <ReadMore
          height="h-20"
          text={categoryData?.description || "Categories"}
        ></ReadMore>
      </div>
      <div className="max-w-screen-xl mx-auto my-1 md:px-8">
        <div className="flex flex-col md:flex-row w-full">
          <div className="w-full md:w-1/4 py-4">
            <button
              className="md:hidden block p-3 border bg-white w-full text-center"
              onClick={toggleHidden}
            >
              Filter
            </button>
            <div
              className={`md:relative md:w-full w-80 fixed   left-0 top-0 z-50 bottom-0 overflow-y-auto bg-white md:bg-transparent ${
                isHidden ? "hidden md:block" : "block"
              }`}
            >
              <div className="md:hidden block">
                <div className="flex items-center justify-between p-4 border-b mb-4">
                  <h1 className="text-black text-xl">Filtern</h1>
                  <button onClick={toggleHidden}>
                    <svg
                      className="text-center inline text-black"
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      height="30"
                      width="30"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <Accordion title={`${categoryData?.name || "Categories"}`}>
                <div className="flex flex-col gap-3">
                  {categoryData ? (
                    <>
                      {categoryData?.subcategory?.map((item) => (
                        <FilterLink
                          active={subcategory === item._id}
                          key={item._id}
                          href={`/shop?category=${categoryData._id}&subcategory=${item._id}`}
                          text={item.name}
                        />
                      ))}
                      <FilterLink href={`/shop`} text={"Go Back"} />
                    </>
                  ) : (
                    <>
                      {data?.categories?.map((item) => (
                        <FilterLink
                          active={category === item._id}
                          key={item._id}
                          href={`/shop?category=${item._id}`}
                          text={item.name}
                        />
                      ))}
                    </>
                  )}

                  {}
                </div>
              </Accordion>
              <Accordion title="Countries">
                <div className="flex flex-col gap-3">
                  {countryData?.countries?.map((item) => (
                    <div
                      key={item._id}
                      onClick={() => handleCountry(item._id)}
                      className="flex items-center gap-3  "
                    >
                      <input
                        readOnly
                        type="checkbox"
                        checked={isSelect(country, item._id)}
                      />
                      <div className="flex items-center gap-2">
                        <Image
                          width={50}
                          height={50}
                          src={item?.flag?.url || ""}
                          alt={item?.flag?.name || ""}
                          className=" w-6 h-6  cursor-pointer object-contain "
                          loading="lazy"
                        />
                        <span className="cursor-pointer">{item?.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </Accordion>
              <Accordion title="Grade">
                <div className="flex flex-col gap-3">
                  <div
                    onClick={() => handleLabel("new")}
                    className="flex items-center gap-3  "
                  >
                    <input
                      readOnly
                      type="checkbox"
                      checked={isSelect(label, "new")}
                    />
                    <span className="cursor-pointer">New</span>
                  </div>
                  <div
                    onClick={() => handleLabel("hot")}
                    className="flex items-center gap-3  "
                  >
                    <input
                      readOnly
                      type="checkbox"
                      checked={isSelect(label, "hot")}
                    />
                    <span className="cursor-pointer">Hot</span>
                  </div>
                  <div
                    onClick={() => handleLabel("sale")}
                    className="flex items-center gap-3  "
                  >
                    <input
                      readOnly
                      type="checkbox"
                      checked={isSelect(label, "sale")}
                    />
                    <span className="cursor-pointer">Sale</span>
                  </div>
                </div>
              </Accordion>
              <Accordion isEnd={true} title="Product Group">
                <div className="flex flex-col gap-3">
                  {productGroupData?.productGroups?.map((item) => (
                    <FilterLink
                      active={productGroup === item._id}
                      key={item._id}
                      href={`/shop?productGroup=${item._id}`}
                      text={item.name}
                    />
                  ))}
                </div>
              </Accordion>
            </div>
          </div>
          <div className="w-full md:w-3/4">
            {isLoading && <Loading />}

            {productsData?.products?.length === 0 && (
              <div className="flex items-center justify-center h-96">
                <h1 className="text-2xl">No Product Found</h1>
              </div>
            )}
            {isError && (
              <div className="flex items-center justify-center h-96">
                <h1 className="text-2xl">Something went wrong</h1>
              </div>
            )}

            <div iv className="grid md:grid-cols-3 grid-cols-2 gap-3 p-4">
              {productsData?.products?.map((prod) => (
                <ProductCard product={prod} key={prod._id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
