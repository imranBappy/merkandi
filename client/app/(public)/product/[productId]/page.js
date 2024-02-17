"use client";

import ProductDetails from "@/components/Product/ProductDetails";

const page = ({ params }) => {
  return (
    <div>
      <ProductDetails params={params} />
    </div>
  );
};

export default page;
