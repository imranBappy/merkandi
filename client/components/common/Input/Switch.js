"use client";
import { useEffect, useState } from "react";

const Switch = ({ value, onChange = () => {} }) => {
  const [isOn, setIsOn] = useState(true);

  useEffect(() => {
    setIsOn(value);
  }, [value]);

  const toggleSwitch = () => {
    setIsOn(!isOn);
    onChange(!isOn);
  };

  return (
    <div
      className={`${
        isOn ? "bg-green-500" : "bg-gray-300"
      } w-14 h-8 rounded-full p-1 flex items-center cursor-pointer`}
      onClick={toggleSwitch}
    >
      <div
        className={`${
          isOn ? "bg-white" : "bg-gray-600"
        } w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
          isOn ? "translate-x-full" : "translate-x-0"
        }`}
      ></div>
    </div>
  );
};

export default Switch;
