"use client";

import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/components/Header/Header"), {
  ssr: false,
});
// import ProductDetails from "@/components/Product/ProductDetails";
const ProductDetails = dynamic(
  () => import("@/components/Product/ProductDetails"),
  {
    ssr: false,
  }
);

const page = ({ params }) => {
  return (
    <div>
      {/* <Header /> */}
      <ProductDetails params={params} />
      product details
    </div>
  );
};

export default page;
