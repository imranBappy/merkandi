"use client";
import { useRouter } from "next/navigation";
import Namemask from "@/components/Namemask";
import PhotoGallery from "@/components/PhotoGallery";
import ReadMore from "@/components/ReadMore";
import { useGetProductQuery } from "@/redux/features/product/productApi";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useGetStoresQuery } from "@/redux/features/store/storeApi";
import { usePostClickMutation } from "@/redux/features/click/clickApi";
import { useDispatch, useSelector } from "react-redux";
import { addOrder } from "@/redux/features/order/orderSlice";
import Toaster from "@/components/common/Toaster/Toaster";

export default function ProductDetails({ params }) {
  const router = useRouter();

  const { data, isLoading } = useGetProductQuery(params.productId, {
    refetchOnMountOrArgChange: true,
    skip: !params.productId,
  });

  const { data: storeData } = useGetStoresQuery({
    user: data?.user || "",
    active: true,
  });

  const [clickProduct, { isLoading: clickLoading }] = usePostClickMutation();
  const { isAuthintication } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleClick = (prodId, type) => {
    if (!isAuthintication) {
      router.push("/login");
    }
    if (prodId && type) {
      clickProduct({ product: prodId, type });
    }
  };

  const { order } = useSelector((state) => state.order);

  const handleAddToBasket = (product) => {
    const exist = order.find((item) => item._id === product?._id);
    if (exist) {
      const newOrder = order.map((item) =>
        item._id === product._id
          ? { ...exist, quantity: exist.quantity + 1 }
          : item
      );
      dispatch(addOrder(newOrder));
      localStorage.setItem("order", JSON.stringify(newOrder));
    } else {
      const newState = [
        ...order,
        {
          ...product,
          quantity: product.minimalOrder || 1,
        },
      ];
      dispatch(addOrder(newState));
      localStorage.setItem("order", JSON.stringify(newState));
    }

    Toaster({
      type: "success",
      message: "Product added to basket",
    });
  };

  return (
    <>
      <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto py-1 md:px-8">
        <div className="w-full md:w-3/4 bg-white my-4">
          <div className="flex flex-col md:flex-row items-start w-full mb-4 p-3">
            <div className="w-full md:w-3/6 border p-2">
              <PhotoGallery
                image={data?.image}
                photos={data?.gallery || []}
                isLoading={isLoading}
              />
            </div>
            <div className="w-full md:w-2/4 pl-4">
              <h1 className="text-2xl font-semibold mb-3">{data?.title}</h1>
              <div className="flex items-end gap-1">
                <h2 className="text-rose-500 text-2xl font-semibold leading-6">
                  ${data?.price?.toFixed(2)}
                </h2>
                <p className="text-sm text-[#969696] capitalize ">
                  /{data?.unit}
                </p>
                <p className="text-sm text-green-600 font-semibold">
                  price excl. VAT
                </p>
              </div>

              {data?.wholesale && (
                <div className=" mt-4  border-t">
                  {data?.wholesalePrices?.map((item, index) => (
                    <div
                      key={`wholesale-${index}`}
                      className="flex items-center gap-12   border-b py-2"
                    >
                      <p className=" text-red-500 font-semibold  ">
                        €{item.price}
                      </p>{" "}
                      <p className="   ">
                        from {item.quantity} to {item.to} {data?.unit}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex flex-col md:flex-row items-center justify-between gap-4 my-4">
                <button
                  disabled={clickLoading}
                  onClick={() => handleClick(data?._id, "order")}
                  className="w-full text-center bg-[#f29d00] hover:bg-[#cc8400] text-white py-3 font-normal text-sm leading-3"
                >
                  Order
                </button>
                <button
                  onClick={() => handleAddToBasket(data)}
                  className="w-full cursor-pointer text-center border-[#f29d00] border hover:bg-[#cc8400] text-[#f29d00] hover:text-white py-3 font-normal text-sm leading-3"
                >
                  Add to basket
                </button>
              </div>
              <div className="flex flex-col gap-y-3 border-y py-4 my-4 text-sm">
                <div className="flex justify-between">
                  <div className="w-1/2 font-semibold	">Minimal order</div>
                  <div className="w-1/2">
                    {data?.minimalOrder || 0} {data?.unit}
                  </div>
                </div>

                <div className="flex justify-between">
                  <div className="w-1/2 font-semibold	">Available quantity</div>
                  <div className="w-1/2">
                    {data?.stock} {data?.unit}
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="w-1/2 font-semibold	">Country</div>
                  <div className="w-1/2 flex items-center">
                    <Link href="#" className="flex items-center text-[#299bcc]">
                      {data?.country.map((item, index) => (
                        <Image
                          key={`country-${index}`}
                          src={item?.flag?.url}
                          width={20}
                          height={20}
                          alt="flag"
                        />
                      ))}
                    </Link>
                  </div>
                </div>

                <div className="flex justify-between">
                  <div className="w-1/2 font-semibold	">Grade</div>
                  <div className="w-1/2">
                    <Link className="text-[#299bcc] capitalize " href="#">
                      {data?.label}
                    </Link>
                  </div>
                </div>

                <div className="flex justify-between">
                  <div className="w-1/2 font-semibold	">Brand</div>
                  <div className="w-1/2">
                    <Link className="text-[#299bcc] capitalize " href="#">
                      {data?.brand?.name}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 my-4">
                <button
                  disabled={clickLoading}
                  onClick={() => handleClick(data?._id, "message")}
                  className="flex items-center bg-[#f29d00] hover:bg-[#cc8400] text-white px-5 py-3 font-normal text-sm leading-3"
                >
                  <svg
                    className="mr-1"
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 1024 1024"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path>
                  </svg>
                  Message
                </button>
                <button
                  disabled={clickLoading}
                  onClick={() => handleClick(data?._id, "phone")}
                  href="/dashboard"
                  className="flex items-center bg-[#f29d00] hover:bg-[#cc8400] text-white px-5 py-3 font-normal text-sm leading-3"
                >
                  <svg
                    className="mr-1"
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"></path>
                  </svg>
                  Phone call
                </button>
              </div>
            </div>
          </div>
          <div className="relative border p-5 m-3 gap-y-4 grid">
            <ReadMore height="h-36" text={data?.description} />

            <div className="py-4 border-y">
              <h1 className="text-lg font-semibold mb-2">Payment options</h1>
              <div className="grid grid-cols-3">
                {data?.acceptPayments?.map((payment, index) => (
                  <div className="flex items-center" key={`payment-${index}`}>
                    <svg
                      className="mr-1 text-green-600"
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 1024 1024"
                      height="20"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path>
                    </svg>
                    <p className=" capitalize ">{payment}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pb-4 border-b">
              <h1 className="text-lg font-semibold mb-2">Delivery options</h1>
              <div className="grid grid-cols-3">
                {data?.deliveryOptions?.map((payment, index) => (
                  <div className="flex items-center" key={`payment-${index}`}>
                    <svg
                      className="mr-1 text-green-600"
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 1024 1024"
                      height="20"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path>
                    </svg>
                    <p className=" capitalize">{payment}</p>
                  </div>
                ))}
              </div>
            </div>
            {data?.tags.length ? (
              <div className="pb-4">
                <h1 className="text-lg font-semibold mb-2">Tags</h1>
                <div className="flex flex-wrap gap-2">
                  {data?.tags.map((tag, index) => (
                    <Link
                      className="bg-white text-[#666] hover:text-black px-3 py-1 border text-sm"
                      href={`/search?tag=${tag}`}
                      key={`tag-${index}`}
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
        <div className="w-full md:w-1/4 bg-[#f7f7f7] my-4">
          <div className="w-full p-5 gap-y-4 text-sm sticky top-0">
            <h3 className="text-[#299bcc] font-semibold mb-2">
              Wholesalers data
            </h3>
            <Namemask title="products" />
            <div className="flex items-center text-green-600 my-2 text-sm">
              <svg
                className="mr-1"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.03 9.78a.75.75 0 0 0-1.06-1.06l-5.47 5.47-2.47-2.47a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l6-6Z"></path>
                <path d="m14.136 1.2 1.375 1.01c.274.201.593.333.929.384l1.687.259a3.61 3.61 0 0 1 3.02 3.021l.259 1.686c.051.336.183.655.384.929l1.01 1.375a3.61 3.61 0 0 1 0 4.272l-1.01 1.375a2.106 2.106 0 0 0-.384.929l-.259 1.687a3.61 3.61 0 0 1-3.021 3.02l-1.686.259a2.106 2.106 0 0 0-.929.384l-1.375 1.01a3.61 3.61 0 0 1-4.272 0l-1.375-1.01a2.106 2.106 0 0 0-.929-.384l-1.687-.259a3.61 3.61 0 0 1-3.02-3.021l-.259-1.686a2.117 2.117 0 0 0-.384-.929L1.2 14.136a3.61 3.61 0 0 1 0-4.272l1.01-1.375c.201-.274.333-.593.384-.929l.259-1.687a3.61 3.61 0 0 1 3.021-3.02l1.686-.259c.336-.051.655-.183.929-.384L9.864 1.2a3.61 3.61 0 0 1 4.272 0Zm-3.384 1.209-1.375 1.01a3.614 3.614 0 0 1-1.59.658l-1.686.258a2.111 2.111 0 0 0-1.766 1.766l-.258 1.686a3.61 3.61 0 0 1-.658 1.589l-1.01 1.376a2.11 2.11 0 0 0 0 2.496l1.01 1.375c.344.469.57 1.015.658 1.59l.258 1.686c.14.911.855 1.626 1.766 1.766l1.686.258a3.61 3.61 0 0 1 1.589.658l1.376 1.01a2.11 2.11 0 0 0 2.496 0l1.375-1.01a3.613 3.613 0 0 1 1.59-.657l1.686-.26a2.11 2.11 0 0 0 1.766-1.765l.258-1.686a3.61 3.61 0 0 1 .658-1.589l1.01-1.376a2.11 2.11 0 0 0 0-2.496l-1.01-1.375a3.613 3.613 0 0 1-.657-1.59l-.26-1.686a2.11 2.11 0 0 0-1.765-1.766l-1.686-.258a3.61 3.61 0 0 1-1.589-.658l-1.376-1.01a2.11 2.11 0 0 0-2.496 0Z"></path>
              </svg>
              <p>Verified Seller</p>
            </div>
            <div className="flex items-center text-green-600 my-2 text-sm">
              <svg
                className="mr-1"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                version="1.1"
                viewBox="0 0 17 17"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g></g>
                <path d="M9 2.025v-1.025h1.5v-1h-4v1h1.5v1.025c-3.902 0.26-7 3.508-7 7.475 0 4.136 3.364 7.5 7.5 7.5s7.5-3.364 7.5-7.5c0-3.967-3.098-7.215-7-7.475zM8.5 16c-3.584 0-6.5-2.916-6.5-6.5s2.916-6.5 6.5-6.5 6.5 2.916 6.5 6.5-2.916 6.5-6.5 6.5zM9 9h4v1h-5v-4h1v3z"></path>
              </svg>
              <p>The seller responds promptly</p>
            </div>
            <p></p>
            <div className="grid grid-cols-2 gap-2 border-b pb-2 mb-2 text-sm">
              <p>Country:</p>
              <Link href="#" className="flex items-center text-[#299bcc]">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 32 32"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M 3 7 L 3 17 L 15 17 L 17 17 L 29 17 L 29 15 L 17 15 L 17 13 L 29 13 L 29 11 L 17 11 L 17 9 L 29 9 L 29 7 L 17 7 L 15 7 L 3 7 z M 5 8 C 5.552 8 6 8.448 6 9 C 6 9.552 5.552 10 5 10 C 4.448 10 4 9.552 4 9 C 4 8.448 4.448 8 5 8 z M 9 8 C 9.552 8 10 8.448 10 9 C 10 9.552 9.552 10 9 10 C 8.448 10 8 9.552 8 9 C 8 8.448 8.448 8 9 8 z M 13 8 C 13.552 8 14 8.448 14 9 C 14 9.552 13.552 10 13 10 C 12.448 10 12 9.552 12 9 C 12 8.448 12.448 8 13 8 z M 7 11 C 7.552 11 8 11.448 8 12 C 8 12.552 7.552 13 7 13 C 6.448 13 6 12.552 6 12 C 6 11.448 6.448 11 7 11 z M 11 11 C 11.552 11 12 11.448 12 12 C 12 12.552 11.552 13 11 13 C 10.448 13 10 12.552 10 12 C 10 11.448 10.448 11 11 11 z M 15 11 C 15.552 11 16 11.448 16 12 C 16 12.552 15.552 13 15 13 C 14.448 13 14 12.552 14 12 C 14 11.448 14.448 11 15 11 z M 5 14 C 5.552 14 6 14.448 6 15 C 6 15.552 5.552 16 5 16 C 4.448 16 4 15.552 4 15 C 4 14.448 4.448 14 5 14 z M 9 14 C 9.552 14 10 14.448 10 15 C 10 15.552 9.552 16 9 16 C 8.448 16 8 15.552 8 15 C 8 14.448 8.448 14 9 14 z M 13 14 C 13.552 14 14 14.448 14 15 C 14 15.552 13.552 16 13 16 C 12.448 16 12 15.552 12 15 C 12 14.448 12.448 14 13 14 z M 3 19 L 3 21 L 29 21 L 29 19 L 3 19 z M 3 23 L 3 25 L 29 25 L 29 23 L 3 23 z"></path>
                </svg>
                Italy
              </Link>
              <p>City:</p>
              <Namemask title="City" />
              <p>Postal code:</p>
              <Namemask title="Postal code" />
              <p>Street:</p>
              <Namemask title="Street" />
            </div>

            {storeData?.stores?.map((store) => (
              <div
                key={`store-${store._id}`}
                className="grid grid-cols-2 gap-2 border-b pb-2 mb-2 text-sm"
              >
                <p>Name and surname</p>
                <Namemask title={store.name} />
                <p>Languages:</p>
                <Link href="#" className="flex items-center text-[#299bcc]">
                  <Image
                    src={store?.country?.flag?.url || ""}
                    width={20}
                    height={20}
                    alt="flag"
                  />
                </Link>
                <p>Phone number:</p>
                <Namemask title={store?.phone} />
              </div>
            ))}

            <div className="flex flex-col gap-y-3 border-t pt-4 mt-4">
              <Link
                href="/dashboard"
                className="w-full text-center hover:border-black border bg-white text-black py-3 font-normal text-sm leading-3"
              >
                View profile
              </Link>
              <Link
                href="/offers"
                className="w-full text-center hover:border-black border bg-white text-black py-3 font-normal text-sm leading-3"
              >
                All offers
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex items-center justify-between max-w-screen-xl mx-auto my-4 md:px-8">
        <h1 className="text-2xl font-bold leading-8 text-black">
          Other offers of this wholesaler
        </h1>
      </div>
      <div className="max-w-screen-xl mx-auto md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <ProductCard
            link="#"
            title="Children's Clothing Mix: George, F&F, Nutmeg, TU, Disney and more"
            price={99.99}
            pricetag="piece"
            stock="10 pc"
            level="Premium"
            images={["/images/1.webp"]}
            offer="Week's best offer"
          />
          <ProductCard
            link="#"
            title="Children's Clothing Mix: George, F&F, Nutmeg, TU, Disney and more"
            price={99.99}
            pricetag="piece"
            stock="no limits"
            level="Mix / returns"
            images={["/images/2.webp"]}
            offer="Week's best offer"
          />
          <ProductCard
            link="#"
            title="Children's Clothing Mix: George, F&F, Nutmeg, TU, Disney and more"
            price={99.99}
            pricetag="piece"
            stock="10 pc"
            level="Premium"
            images={["/images/3.webp"]}
            offer="Week's best offer"
          />
          <ProductCard
            link="#"
            title="Children's Clothing Mix: George, F&F, Nutmeg, TU, Disney and more"
            price={99.99}
            pricetag="piece"
            stock="10 pc"
            level="Premium"
            images={["/images/4.webp"]}
            offer="Week's best offer"
          />
        </div>
      </div>

      <div className="flex items-center justify-between max-w-screen-xl mx-auto my-4 md:px-8">
        <h1 className="text-2xl font-bold leading-8 text-black">
          Other offers in this category
        </h1>
      </div>
      <div className="max-w-screen-xl mx-auto md:px-8 mb-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <ProductCard
            link="#"
            title="Children's Clothing Mix: George, F&F, Nutmeg, TU, Disney and more"
            price={99.99}
            pricetag="piece"
            stock="10 pc"
            level="Premium"
            images={["/images/1.webp"]}
            offer="Week's best offer"
          />
          <ProductCard
            link="#"
            title="Children's Clothing Mix: George, F&F, Nutmeg, TU, Disney and more"
            price={99.99}
            pricetag="piece"
            stock="no limits"
            level="Mix / returns"
            images={["/images/2.webp"]}
            offer="Week's best offer"
          />
          <ProductCard
            link="#"
            title="Children's Clothing Mix: George, F&F, Nutmeg, TU, Disney and more"
            price={99.99}
            pricetag="piece"
            stock="10 pc"
            level="Premium"
            images={["/images/3.webp"]}
            offer="Week's best offer"
          />
          <ProductCard
            link="#"
            title="Children's Clothing Mix: George, F&F, Nutmeg, TU, Disney and more"
            price={99.99}
            pricetag="piece"
            stock="10 pc"
            level="Premium"
            images={["/images/4.webp"]}
            offer="Week's best offer"
          />
        </div>
      </div> */}
    </>
  );
}
