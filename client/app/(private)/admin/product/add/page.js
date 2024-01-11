"use client";
import AdminBer from "@/components/admin/AdminBer";
import Toaster from "@/components/common/Toaster/Toaster";
import {
  useGetProductQuery,
  usePostProductMutation,
  useUpdateProductMutation,
} from "@/redux/features/product/productApi";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import AddProduct from "@/components/Product/AddProduct";

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

export default function AddProductPage() {
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

  const { data: productData } = useGetProductQuery(id, {
    refetchOnMountOrArgChange: true,
    skip: !productId,
  });
  const [
    updateProduct,
    { isLoading: updateLoading, error: updateError, isSuccess: updateSuccess },
  ] = useUpdateProductMutation();
  const [
    addProduct,
    { data, isLoading, error: productError, isError, isSuccess },
  ] = usePostProductMutation();

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

  const [image, setImage] = useState([]);
  const [gallery, setGallery] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
    setError({ ...error, [name]: "" });
  };

  useEffect(() => {
    if (image.length > 0) {
      setError({ ...error, image: "" });
    }
    //add error
  }, [image, error]);

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
  }, [isSuccess, productError]);

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
  }, [updateSuccess, updateError]);

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
    <>
      <div className="max-w-screen-xl mx-auto py-4 md:px-8">
        <div className="flex flex-col md:flex-row items-start">
          <div className="w-full md:w-3/12">
            <AdminBer />
          </div>
          <div className="w-full md:w-9/12 pl-0 md:pl-6">
            <AddProduct />
          </div>
        </div>
      </div>
    </>
  );
}
