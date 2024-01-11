"use client";
import LeftUser from "@/components/LeftUser";
import AddProduct from "@/components/Product/AddProduct";
import ImageManager from "@/components/common/ImageManager/index";
// import Modal from "@/components/common/Modal/Modal";
import Brands from "@/components/seller/Brands";
import Categories from "@/components/seller/Categories";
// import Content from "@/components/seller/Content";
import Country from "@/components/seller/Country";
import DeliveryOptions from "@/components/seller/DeliveryOptions";
// import MultiImageBox from "@/components/seller/Gallery";
import PaymentOptions from "@/components/seller/PaymentOptions";
import Price from "@/components/seller/Price";
// import Publish from "@/components/seller/Publish";
import Tags from "@/components/seller/Tags";
// import Thumbnail from "@/components/seller/Thumbnail";
// import Title from "@/components/seller/Title";

export default function Add() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto py-4 md:px-8">
        <div className="flex flex-col md:flex-row items-start">
          <div className="w-full md:w-3/12">
            <LeftUser />
          </div>
          <div className="w-full md:w-9/12 pl-0 md:pl-6">
            <AddProduct isAmin={false} />
          </div>
        </div>
      </div>
    </>
  );
}
