import Image from "next/image";
import Link from "next/link";

function SmProductCard({ product }) {
  const { image, price, unit, title, stock, label, productGroup, _id } =
    product;
  return (
    <Link
      href={`/product/${_id}`}
      className="border hover:shadow-lg group  bg-white block"
    >
      <div className="relative  ">
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
      <div className="   p-4 bg-white flex items-center flex-col justify-between  ">
        <h1 className="line-clamp-4 mb-2 text-md font-normal hover:text-mm group-hover:text-mm leading-5">
          {title}
        </h1>
        <p className="my-2 bg-red-500 text-sm inline-flex p-1 text-white">
          ${price.toFixed(2)}
        </p>
      </div>
    </Link>
  );
}

export default SmProductCard;
