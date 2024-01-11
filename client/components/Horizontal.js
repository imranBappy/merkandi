// components/Horizontal.js
import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Horizontal = ({ category }) => {
  const [open, setOpen] = useState(false);
  const { name, _id, image, subcategory } = category;
  const router = useRouter();

  const handleClick = () => {
    router.push(`/shop?category=${_id}`, { scroll: false });
    setOpen(!open);
  };

  return (
    <nav className="bg-white text-slate-500">
      <button
        className="flex items-center justify-between hover:bg-gray-200 w-full text-slate-500 p-2"
        onClick={handleClick}
      >
        <div className="flex items-center gap-2">
          <Image
            src={image?.url}
            width={30}
            height={30}
            alt="Picture of the author"
            className="mb-1 w-10 h-10 object-contain  rounded-full "
          />
          <h6>{name}</h6>
        </div>
        <MdKeyboardArrowRight
          className={`transform text-xl text-gray-400 ${
            open ? "rotate-90" : ""
          }`}
        />
      </button>
      {open && (
        <ul className="flex flex-col divide-y">
          {subcategory.map((item, index) => (
            <li key={index} className="p-2 block bg-gray-100 hover:bg-gray-200">
              <Link
                href={`/shop?category=${_id}&subcategory=${item._id}`}
                className="block"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Horizontal;
