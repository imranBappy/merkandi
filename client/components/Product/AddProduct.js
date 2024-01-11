"use client";
import Button from "@/components/common/Button/Button";
import ImageManager from "@/components/common/ImageManager";
import TextInput from "@/components/common/Input/TextInput";
import Textarea from "@/components/common/Input/Textarea";
import Toaster from "@/components/common/Toaster/Toaster";
import Brands from "@/components/seller/Brands";
import Categories from "@/components/seller/Categories";
import Country from "@/components/seller/Country";
import DeliveryOptions from "@/components/seller/DeliveryOptions";
import PaymentOptions from "@/components/seller/PaymentOptions";
import Price from "@/components/seller/Price";
import Tags from "@/components/seller/Tags";
import {
  useGetProductQuery,
  usePostProductMutation,
  useUpdateProductMutation,
} from "@/redux/features/product/productApi";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const productInit = {
  title: "",
  description: "",
  price: 0,
  salePrice: 0,
  minimalOrder: 1,
  image: "",
  gallery: [],
  brand: "",
  category: "",
  subcategory: [],
  user: "",
  negotiable: false,
  status: "active",
  tags: [],
  wholesale: false,
  wholesalePrices: [],
  country: [],
  label: "",
  unit: "piece",
  productGroup: "",
  acceptPayments: [],
  deliveryOptions: [],
  stock: 0,
};

export default function AddProduct({ isAmin = true }) {
  const [error, setError] = useState({
    title: "",
    price: "",
    image: "",
  });

  const [product, setProduct] = useState(productInit);

  // query productId

  const [productId, setProductId] = useState("");
  const searchParams = useSearchParams();
  const id = searchParams.get("productId");
  const [image, setImage] = useState([]);
  const [gallery, setGallery] = useState([]);

  const { data: productData } = useGetProductQuery(id, {
    refetchOnMountOrArgChange: true,
    skip: !productId,
  });
  const [
    updateProduct,
    { isLoading: updateLoading, error: updateError, isSuccess: updateSuccess },
  ] = useUpdateProductMutation();
  const [addProduct, { isLoading, error: productError, isError, isSuccess }] =
    usePostProductMutation();

  useEffect(() => {
    if (id) {
      setProductId(id);
    }
  }, [id]);

  useEffect(() => {
    if (productData) {
      setProduct({
        ...productData,
        productGroup: productData.productGroup?._id,
        category: productData.category?._id,
        subcategory: productData.subcategory?.map((item) => item._id),
      });

      setImage([productData.image]);
      setGallery(productData.gallery);
    }
  }, [productData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
    setError({ ...error, [name]: "" });
  };

  useEffect(() => {
    if (isSuccess) {
      Toaster({
        type: "success",
        message: "Added successfully",
      });
      setProduct(productInit);
      setImage([]);
      setGallery([]);
    } else if (productError) {
      Toaster({
        type: "error",
        message: productError?.data || "Something went wrong",
      });
    }
  }, [isSuccess, productError, productInit]);

  useEffect(() => {
    if (updateSuccess) {
      Toaster({
        type: "success",
        message: "Updated successfully",
      });

      setProduct(productInit);
      setImage([]);
      setGallery([]);
    } else if (updateError) {
      Toaster({
        type: "error",
        message: updateError?.data || "Something went wrong",
      });
    }
  }, [updateSuccess, updateError, productInit, updateError?.data]);

  const handleSubmit = () => {
    const newProduct = {
      ...product,
      image: image[0]?._id,
      gallery: gallery.map((item) => item._id),
    };

    let newError = {
      ...error,
    };
    let isError = false;
    if (newProduct.title.trim() === "") {
      isError = true;
      newError.title = "Title is required";
    }
    if (newProduct.price === 0) {
      isError = true;
      newError.price = "Price is required";
    }
    if (!newProduct.image) {
      isError = true;
      newError.image = "Featured image is required";
    }
    if (isError) {
      setError(newError);
      return;
    }

    if (productId) {
      updateProduct({ id: productId, body: newProduct });
      return;
    }

    addProduct(newProduct);
  };

  return (
    <div className="flex flex-col md:flex-row items-start">
      <div className="w-full md:w-9/12 mr-0 md:mr-6">
        <TextInput
          label="Title"
          name="title"
          value={product.title}
          onChange={handleChange}
          error={error.title}
        />
        <Textarea
          label="Description"
          name="description"
          value={product.description}
          onChange={handleChange}
        />

        <Price
          productState={[product, setProduct]}
          errorState={[error, setError]}
          handleChange={handleChange}
        />
        <div className="grid md:grid-cols-2 grid-cols-1 gap-3 my-6">
          <Country productState={[product, setProduct]} />
          <Brands productState={[product, setProduct]} />
        </div>
        <Tags productState={[product, setProduct]} />
      </div>
      <div className="w-full md:w-3/12">
        <ImageManager
          selectedState={[image, setImage]}
          label={"Featured Image"}
          error={error.image}
          setError={(e) => setError({ ...error, image: "" })}
        />
        <ImageManager
          label={"Gallery"}
          multiple={true}
          selectedState={[gallery, setGallery]}
        />
        {isAmin && (
          <div className="w-full my-2">
            <TextInput
              name={"user"}
              value={product.user}
              onChange={handleChange}
              label={"User"}
              placeholder={"User Id"}
              disabled={!!product._id}
            />
          </div>
        )}

        <Categories productState={[product, setProduct]} />
        <PaymentOptions productState={[product, setProduct]} />
        <DeliveryOptions productState={[product, setProduct]} />
        <Button
          disabled={updateLoading || isLoading}
          className="w-full mt-6"
          onClick={handleSubmit}
          label={`${productId ? "Update" : "Publish"} Product`}
        />
      </div>
    </div>
  );
}
