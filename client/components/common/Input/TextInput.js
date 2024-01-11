import React from "react";

const TextInput = ({
  error,
  required,
  label,
  value,
  placeholder,
  onChange,
  className,
  style,
  name,
  ...props
}) => {
  return (
    <div className="relative">
      <div style={{ marginLeft: 1 }} className="flex items-center gap-1 ">
        <p className=" py-1 text-sm">{label}</p>
        {required && <p className=" text-xl text-red-600">*</p>}
      </div>
      <input
        type="text"
        className={`border  h-10 p-2 w-full outline-0 ${className}`}
        placeholder={placeholder}
        onChange={onChange}
        style={{ style }}
        value={value}
        name={name}
        {...props}
      />
      <p style={{ marginLeft: 1 }} className="text-red-600 text-xs mt-1">
        {error}
      </p>
    </div>
  );
};

export default TextInput;
