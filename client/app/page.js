"use client";
import Header from "@/components/Header/Header";
import CategoryMenu from "@/components/Menu/CategoryMenu";
import MobileCategoryMenu from "@/components/Menu/MobileCategoryMenu";
import One from "@/components/One";
import ProductCard from "@/components/Card/ProductCard";
import SlickCarousel from "@/components/SlickCarousel";
import Testimonial from "@/components/Card/TestimonialCard";
import Title from "@/components/Title";
import World from "@/components/World";
import ProductLoader from "@/components/common/Loader/ProductLoader";
import { useGetProductsQuery } from "@/redux/features/product/productApi";
import Link from "next/link";
import React from "react";
import SmProductCard from "@/components/Card/SmProductCard";
import SmProductLeader from "@/components/common/Loader/SmProductLeader";
import { useGetTestimonialsQuery } from "@/redux/features/testimonial/testimonialApi";
import { useSelector } from "react-redux";
import Feature from "@/components/Feature";

export default function Home() {
  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Desktop (show 6 slides)
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Adjust the autoplay speed in milliseconds (e.g., 3 seconds)
    responsive: [
      {
        breakpoint: 1024, // Tablet breakpoint
        settings: {
          slidesToShow: 4, // Show 4 slides on tablets
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // Mobile breakpoint
        settings: {
          slidesToShow: 2, // Show 2.5 slides on mobile
          slidesToScroll: 1,
        },
      },
    ],
    prevArrow: (
      <button className="slick-prev" type="button">
        Previous
      </button>
    ),
    nextArrow: (
      <button className="slick-next" type="button">
        Next
      </button>
    ),
  };

  const { data, isLoading } = useGetProductsQuery();
  const { data: testimonialData } = useGetTestimonialsQuery({
    page: 1,
    limit: 3,
  });

  const { result, isLoading: searchIsLoading } = useSelector(
    (state) => state.search
  );

  const largeProductLoader = (
    <div className="max-w-screen-xl mx-auto md:px-8 py-5 grid grid-cols-2 md:grid-cols-4 gap-6">
      <ProductLoader />
      <ProductLoader />
      <ProductLoader />
      <ProductLoader />
      <ProductLoader />
      <ProductLoader />
      <ProductLoader />
      <ProductLoader />
    </div>
  );

  return (
    <>
      {/* <Feature /> */}
      <Header />

      {result?.length > 0 ? (
        <div className="max-w-screen-xl mx-auto md:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {result?.map((prod) => (
              <ProductCard
                product={prod}
                key={prod._id}
                link="/details"
                title="Children's Clothing Mix: George, F&F, Nutmeg, TU, Disney and more"
                price={99.99}
                pricetag="piece"
                stock="10 pc"
                level="Premium"
                images={["/images/1.webp"]}
                offer="Week's best offer"
              />
            ))}
            {isLoading && largeProductLoader}
          </div>
        </div>
      ) : searchIsLoading ? (
        largeProductLoader
      ) : (
        <>
          <div className="flex flex-col md:flex-row items-start justify-between max-w-screen-xl mx-auto my-1 md:px-8">
            <div className="w-full md:w-1/4 hidden md:block">
              <CategoryMenu />
            </div>
            <div className="md:w-3/4 w-full md:pl-5">
              <MobileCategoryMenu />
              <One />

              <div className="bg-white md:p-5 shadow-lg">
                <div className="mx-3 flex items-center justify-between mb-2">
                  <h1 className="text-2xl font-bold leading-8 text-red-500">
                    Weeks best offers
                  </h1>
                  <Link
                    href="/shop"
                    className="flex items-center text-red-500 font-normal text-sm leading-3"
                  >
                    View all
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 32 32"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M 9.09375 4.78125 L 7.6875 6.21875 L 17.46875 16 L 7.6875 25.78125 L 9.09375 27.21875 L 20.3125 16 Z M 16.09375 4.78125 L 14.6875 6.21875 L 24.46875 16 L 14.6875 25.78125 L 16.09375 27.21875 L 27.3125 16 Z"></path>
                    </svg>
                  </Link>
                </div>
                <div
                  className="overflow-hidden mx-3 "
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                >
                  <SlickCarousel settings={carouselSettings}>
                    {data?.products?.map((prod) => (
                      <ProductCard product={prod} key={prod._id} />
                    ))}
                    {isLoading && <ProductLoader />}
                  </SlickCarousel>
                </div>
              </div>
            </div>
          </div>

          <div className="md:p-0 p-3">
            <Title title="Most popular offers" name="View all" link="/shop" />
            <div className="max-w-screen-xl mx-auto md:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {data?.products?.map((prod) => (
                  <ProductCard
                    product={prod}
                    key={prod._id}
                    link="/details"
                    title="Children's Clothing Mix: George, F&F, Nutmeg, TU, Disney and more"
                    price={99.99}
                    pricetag="piece"
                    stock="10 pc"
                    level="Premium"
                    images={["/images/1.webp"]}
                    offer="Week's best offer"
                  />
                ))}
                {isLoading && largeProductLoader}
              </div>
            </div>
          </div>

          <div className="max-w-screen-xl mx-auto md:px-8 my-6">
            <div className="flex flex-col md:flex-row gap-2">
              <div className="md:w-1/4 w-full bg-[#1f8ebe] p-6">
                <h1 className="text-white text-2xl mr-2 font-bold mb-1">
                  Bankrupt stocks
                </h1>
                <p className="text-[#ffffff80] text-sm leading-6 font-normal ">
                  Exceptional products at best prices
                </p>
                <Link
                  href="/dashboard"
                  className="inline-flex mt-3 bg-[#f29d00] hover:bg-[#cc8400] text-white text-sm px-4 py-2"
                >
                  View all
                </Link>
              </div>
              <div className="md:w-3/4 w-full grid grid-cols-2 md:grid-cols-4 gap-4 md:p-0 p-3">
                {data?.products?.map((prod) => (
                  <SmProductCard product={prod} key={prod._id} />
                ))}
                {isLoading && (
                  <>
                    <SmProductLeader />
                    <SmProductLeader />
                    <SmProductLeader />
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="md:p-0 p-4">
            <Title
              title="Lot24 - customers reviews"
              name="View all"
              link="/testimonials"
            />

            <div className="grid md:grid-cols-3 grid-cols-1 gap-4 max-w-screen-xl mx-auto my-4 md:px-8">
              {testimonialData?.testimonials?.map((testimonial) => (
                <Testimonial
                  title={testimonial.review}
                  name={testimonial.name}
                  key={testimonial._id}
                />
              ))}
            </div>
          </div>

          <World />
        </>
      )}
    </>
  );
}
