import s3 from "@/config/awsConfig";
import {
  imageApi,
  useDeleteImageMutation,
  useGetImagesQuery,
} from "@/redux/features/files/imageApi";
import React, { useState } from "react";
import ImageCard from "./ImageCard";
import Loading from "../Loader/Loading";
import { useDispatch } from "react-redux";
import Toaster from "../Toaster/Toaster";
import InfiniteScroll from "react-infinite-scroll-component";

const BrowseImages = ({ tab, selectedState, multiple, setError }) => {
  const [selected, setSelected] = selectedState;

  const [page, setPage] = useState(1);

  const {
    data: imageDate,
    isLoading: imageLoading,
    refetch,
  } = useGetImagesQuery(page);

  const [deleteImage, { data: deleteData, isLoading: deleteLoading }] =
    useDeleteImageMutation();
  const dispatch = useDispatch();

  const handleDelete = async (img) => {
    // console.log("delete", img);
    try {
      // await s3
      //   .deleteObject({
      //     Bucket: process.env.NEXT_PUBLIC_BUCKET_NAME,
      //     Key: img.name,
      //   })
      //   .promise()
      //   .catch((err) => {
      //     console.log(err);
      //     Toaster({
      //       type: "error",
      //       message: "Error deleting image",
      //     });
      //     return;
      //   })
      //   .then(async (res) => {
      //     console.log(res);
      //   });
      await deleteImage(img._id);
      Toaster({
        type: "success",
        message: "Image deleted successfully",
      });
    } catch (err) {
      Toaster({
        type: "error",
        message: "Error deleting image",
      });
    }
  };

  const isSelected = (item) => {
    return !!selected.find((img) => img._id === item._id);
  };

  const handleSelected = (item) => {
    if (multiple) {
      setSelected((pre) => [...pre, item]);
      if (isSelected(item)) {
        setSelected((pre) => pre.filter((img) => img._id !== item._id));
      } else {
        setError();
      }
    } else {
      if (isSelected(item)) {
        setSelected([]);
      } else {
        setSelected([item]);
        setError();
      }
    }
  };

  const handleScroll = (x) => {
    dispatch(
      imageApi.endpoints.getMoreImages.initiate({
        page: imageDate?.page + 1,
      })
    );
  };

  return (
    <div
      id="scrollableDiv"
      className=" w-full p-5  max-h-[calc(100vh-200px)] overflow-y-auto   bg-white  rounded-b-md relative "
    >
      {imageLoading && <Loading />}
      <InfiniteScroll
        dataLength={imageDate?.total || 0}
        next={handleScroll}
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          gap: "1rem",
          padding: "1rem 0",
        }}
        hasMore={imageDate?.images?.length !== imageDate?.total}
        loader={
          <div className="flex items-center justify-center w-full">
            <Loading />
          </div>
        }
        scrollableTarget="scrollableDiv"
        endMessage={
          <p
            style={{
              textAlign: "center",
              width: "100%",
              padding: "10px 0",
            }}
          >
            <b>Yay! You have seen it all</b>
          </p>
        }
        refreshFunction={refetch}
        pullDownToRefresh={refetch}
        pullDownToRefreshThreshold={50}
      >
        {imageDate?.images?.map((item, i) => (
          <ImageCard
            key={item._id}
            src={item.url}
            onDelete={() => handleDelete(item)}
            onSelected={() => handleSelected(item)}
            selected={isSelected(item)}
          />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default BrowseImages;
