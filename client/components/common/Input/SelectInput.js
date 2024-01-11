import React from "react";

const SelectInput = ({
  error,
  required,
  label,
  value,
  placeholder,
  onChange,
  className,
  style,
  name,
  options,
  ...props
}) => {
  return (
    <div className="relative">
      <div style={{ marginLeft: 1 }} className="flex items-center gap-1 ">
        <p className=" py-1 text-sm">{label}</p>
        {required && <p className=" text-xl text-red-600">*</p>}
      </div>

      <div className=" border relative flex  h-10   ">
        <select
          className=" text-black  outline-0 w-full py-1 px-2 "
          onChange={onChange}
          value={value}
          name={name}
          {...props}
        >
          <option value="">Select a category</option>
          {options?.map((item) => (
            <option key={item._id} value={item._id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <p style={{ marginLeft: 1 }} className="text-red-600 text-xs mt-1">
        {error}
      </p>
    </div>
  );
};

export default SelectInput;
