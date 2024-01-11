import React from "react";
import Image from "next/image";

const EmptyOrder = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-6 bg-white border">
      <Image
        src="/notfound.svg"
        width={100}
        height={100}
        alt="Picture of the author"
        className="mr-2"
      />
      <h1 className="md:text-3xl text-xl font-bold my-4 text-center">
        Your shopping cart is empty! Add products to cart.
      </h1>
      <p className="text-center text-sm">
        To add a product, click “Add to Cart” on the product card. Products
        added to the cart remain there until removed and are saved on subsequent
        visits (for logged in users only).
      </p>
    </div>
  );
};

export default EmptyOrder;
