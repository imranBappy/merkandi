"use client";
import Image from "next/image";
import Link from "next/link";

function ProductCard({ product }) {
  const { image, price, unit, title, stock, label, productGroup } = product;

  return (
    <Link
      href={`/${product._id}`}
      className="border hover:shadow-lg group bg-white block"
    >
      <div className="relative">
        {label && (
          <div className="bg-red-500 capitalize text-white absolute py-1 px-2 top-3 left-3 text-xs">
            {label}
          </div>
        )}
        <Image
          width={300}
          height={300}
          className="w-full h-48 object-cover"
          src={image.url}
          alt={title}
          loading="lazy"
          style={{
            objectFit: "contain",
            objectPosition: "center",
          }}
        />
      </div>
      <div className="p-4 bg-white">
        <div className="flex items-center">
          <p className="text-red-500 font-bold">${price.toFixed(2)}</p>
          <p className="text-gray-500 font-light text-xs">/{unit}</p>
        </div>

        <h1 className="line-clamp-2 mb-2 text-md font-normal hover:text-m group-hover:text-mm leading-5">
          {title}
        </h1>
        {stock && (
          <div className="flex items-center mb-2">
            <svg
              className="text-gray-400	"
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 256 256"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M216,64l-12.16,66.86A16,16,0,0,1,188.1,144H62.55L48,64Z"
                opacity="0.2"
              ></path>
              <path d="M222.14,58.87A8,8,0,0,0,216,56H54.68L49.79,29.14A16,16,0,0,0,34.05,16H16a8,8,0,0,0,0,16h18L59.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,152,204a28,28,0,1,0,28-28H83.17a8,8,0,0,1-7.87-6.57L72.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,222.14,58.87ZM96,204a12,12,0,1,1-12-12A12,12,0,0,1,96,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,192,204Zm4-74.57A8,8,0,0,1,188.1,136H69.22L57.59,72H206.41Z"></path>
            </svg>
            <p className="pl-1 text-sm text-gray-400">{stock}</p>
          </div>
        )}
        {productGroup && (
          <div className="flex items-center">
            <svg
              className="text-gray-400	"
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 32 32"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M 8.5 5 L 8.1875 5.40625 L 5 9.65625 L 5 27 L 27 27 L 27 9.65625 L 23.8125 5.40625 L 23.5 5 Z M 9.5 7 L 15 7 L 15 9 L 8 9 Z M 17 7 L 22.5 7 L 24 9 L 17 9 Z M 7 11 L 25 11 L 25 25 L 7 25 Z M 12.8125 13 C 12.261719 13.050781 11.855469 13.542969 11.90625 14.09375 C 11.957031 14.644531 12.449219 15.050781 13 15 L 19 15 C 19.359375 15.003906 19.695313 14.816406 19.878906 14.503906 C 20.058594 14.191406 20.058594 13.808594 19.878906 13.496094 C 19.695313 13.183594 19.359375 12.996094 19 13 L 13 13 C 12.96875 13 12.9375 13 12.90625 13 C 12.875 13 12.84375 13 12.8125 13 Z"></path>
            </svg>
            <p className="pl-1 text-sm text-gray-400">{productGroup?.name}</p>
          </div>
        )}
      </div>
    </Link>
  );
}

export default ProductCard;
