import React from "react";
import Link from "next/link";
import Image from "next/image";

const MenuItem = ({ item }) => {
  const { name, subcategory, image, _id } = item;
  return (
    <li className="group w-full">
      <Link
        href={`/shop?category=${_id}`}
        className="flex items-center justify-between group-hover:bg-[#f7f7f7] border-l-4 group-hover:border-[#299bcc] border-white hover:text-accent transition cursor-pointer p-3"
      >
        <div className="flex items-center">
          <Image
            src={image?.url || ""}
            alt="hero"
            width={30}
            height={30}
            className="mr-2 rounded-full"
          />

          {name}
        </div>
        <svg
          className="group-hover:text-[#299bcc]"
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" d="M0 0h24v24H0V0z"></path>
          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path>
        </svg>
      </Link>
      {subcategory.length > 0 && (
        <div className="w-[300px] left-[300px] bg-white z-10 invisible group-hover:visible absolute top-0 bottom-0">
          <Link
            className="flex border-b font-semibold text-[#299bcc] transition cursor-pointer p-3"
            href={`/shop?category=${_id}`}
          >
            {name}
          </Link>
          {subcategory?.map((sub) => (
            <Link
              key={sub._id}
              className="flex hover:bg-[#f7f7f7] hover:text-[#299bcc] transition cursor-pointer p-3"
              href={`/shop?subcategory=${sub._id}&category=${_id}`}
            >
              {sub.name}
            </Link>
          ))}
        </div>
      )}
    </li>
  );
};

export default MenuItem;
