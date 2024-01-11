import React from "react";
import Link from "next/link";

const FilterLink = ({ active, href, text }) => {
  return (
    <Link
      className={`${active ? "text-[#1f7ba3] font-semibold" : "text-[#299bcc]"}`}
      href={href}
    >
      {text}
    </Link>
  );
};

export default FilterLink;
