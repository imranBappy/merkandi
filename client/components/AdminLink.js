// components/Horizontal.js
import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from 'next/link'

const AdminLink = ({ defaultTitle, defaultIcon, items }) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white text-slate-500">
      <button
        className="flex items-center justify-between hover:bg-gray-200 w-full text-slate-500 p-2"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center gap-2">
          {defaultIcon}
          {defaultTitle}
        </div>
        <MdKeyboardArrowRight
          className={`transform text-xl text-gray-400 ${
            open ? "rotate-90" : ""
          }`}
        />
      </button>
      {open && (
        <ul className="flex flex-col divide-y">
          {items.map((item, index) => (
            <li key={index} className="p-2 block bg-gray-100 hover:bg-gray-200">
              <Link href={item.link} className="block">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default AdminLink;
