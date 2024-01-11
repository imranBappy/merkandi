import Link from "next/link";
import React from "react";

const Button = ({
  href,
  label,
  className,
  onClick,
  disabled,
  active,
  children,
  ...props
}) => {
  const btn = (
    <button
      disabled={disabled}
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}
        ${active ? "bg-blue-700" : ""}
        ${disabled ? "bg-gray-500" : ""}
        `}
      {...props}
      onClick={onClick}
    >
      {label || children}
    </button>
  );
  return href ? <Link href={href || "#"}>{btn}</Link> : btn;
};

export default Button;
