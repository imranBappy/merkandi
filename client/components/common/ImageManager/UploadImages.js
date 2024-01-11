import { usePostImagesMutation } from "@/redux/features/files/imageApi";
import React, { useEffect, useState } from "react";
import ImageCard from "./ImageCard";
import Button from "../Button/Button";
import { imageBulkUpload } from "@/utils/uploadImage";
import Toaster from "../Toaster/Toaster";

const UploadImages = ({ tab, setError }) => {
  const [images, setImages] = useState([]);
  const [files, setFiles] = useState([]); // file to be uploaded
  const [loading, setLoading] = useState(false); // file to be uploaded
  const [uploadImages, { isLoading, isSuccess }] = usePostImagesMutation();

  useEffect(() => {
    if (isSuccess) {
      setImages([]);
      setFiles([]);
      Toaster({
        type: "success",
        message: "Images Uploaded Successfully",
      });
    }
  }, [isSuccess]);

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading]);

  const handleRemoveImage = (id) => {
    setImages((pre) => pre.filter((image) => image.id !== id));
  };
  const handleChange = async (e) => {
    const files = e.target.files;
    const filesArr = Array.prototype.slice.call(files);
    setFiles(filesArr);
    for (let i = 0; i < filesArr.length; i++) {
      const file = filesArr[i];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages((pre) => [
          ...pre,
          {
            file: file,
            id: i,
            url: reader.result,
            name: file.name,
          },
        ]);
      };

      reader.readAsDataURL(file);
    }

    setError();
  };
  const uploadImage = async () => {
    setLoading(true);
    const images = await imageBulkUpload(files);
    uploadImages(images);
  };
  return (
    <div>
      {images.length > 0 ? (
        <div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((image) => (
              <ImageCard
                key={image.id}
                src={image.url}
                onClick={() => handleRemoveImage(image.id)}
              />
            ))}
          </div>
          <div className="w-full flex justify-center mt-5">
            <Button
              disabled={loading}
              onClick={uploadImage}
              label={loading ? "Loading..." : "Upload All Images"}
            />
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input
              onChange={handleChange}
              id="dropzone-file"
              type="file"
              multiple
              className="hidden"
              accept=".jpg, .jpeg, .png"
            />
          </label>
        </div>
      )}
    </div>
  );
};

export default UploadImages;
