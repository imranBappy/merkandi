import React from "react";
import Image from "next/image";
import styles from "./image.module.css";

const ImageCard = ({
  src,
  onDelete = () => {},
  onSelected = () => {},
  selected,
}) => {
  return (
    <div
      onClick={onSelected}
      className={`relative h-[150px] w-[150px] rounded-lg  cursor-pointer ${
        styles.imageWrapper
      }  ${selected ? "ring-2 ring-indigo-700 shadow-lg " : "shadow"} `}
    >
      <button
        onClick={onDelete}
        className={`absolute hidden top-0 right-0 bg-red-500 text-white rounded-full h-6 w-6  items-center justify-center ${styles.deleteBtn}`}
      >
        x
      </button>
      <Image
        className="h-auto max-w-full p-5   "
        src={src}
        loader={({ src, width, quality }) => {
          return `${src}?w=${width}&q=${quality || 75}`;
        }}
        loading="lazy"
        alt=""
        fill={true}
      />
    </div>
  );
};

export default ImageCard;
