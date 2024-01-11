"use client";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOrder } from "../../redux/features/order/orderSlice";

const CartItem = ({ item, selectedState }) => {
  const dispatch = useDispatch();

  const { order } = useSelector((state) => state.order);
  const [selected, setSelected] = selectedState;

  const handleRemove = () => {
    const newOrder = order.filter((i) => i._id !== item._id);
    dispatch(addOrder(newOrder));
    localStorage.setItem("order", JSON.stringify(newOrder));
  };

  const increaseQuantity = () => {
    const newOrder = order.map((i) => {
      if (i._id === item._id) {
        return { ...i, quantity: i.quantity + 1 };
      }
      return i;
    });

    dispatch(addOrder(newOrder));
    localStorage.setItem("order", JSON.stringify(newOrder));
  };

  const decreaseQuantity = () => {
    const newOrder = order.map((i) => {
      if (i._id === item._id) {
        if (i.minimalOrder >= i.quantity) {
          return i;
        }
        return { ...i, quantity: i.quantity - 1 };
      }
      return i;
    });
    dispatch(addOrder(newOrder));

    localStorage.setItem("order", JSON.stringify(newOrder));
  };

  const handleSelect = () => {
    if (selected.includes(item._id)) {
      setSelected(selected.filter((i) => i !== item._id));
    } else {
      setSelected([...selected, item._id]);
    }
  };
  const isCheck = selected.includes(item._id);
  return (
    <div className="border p-4 mb-4 flex items-center">
      <div className="flex items-center  gap-3 justify-center  ">
        <input
          className="w-4 h-4"
          type="checkbox"
          name="selected"
          id="selected"
          checked={isCheck}
          onClick={handleSelect}
        />
        <Image
          src={item.image.url}
          width={100}
          height={100}
          alt={"item.title"}
          className="    w-16 h-16"
        />
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
        <p className="text-gray-600">{item.unit}</p>
      </div>
      <div className="flex-1 flex items-center justify-end">
        <button
          onClick={decreaseQuantity}
          className="bg-blue-500 text-white px-2"
        >
          -
        </button>
        <span className="mx-2">{item.quantity}</span>
        <button
          onClick={increaseQuantity}
          className="bg-blue-500 text-white px-2"
        >
          +
        </button>
      </div>
      <p className="text-xl font-bold ml-4">${item.price * item.quantity}</p>
      <button onClick={handleRemove} className="ml-4 text-red-500">
        Remove
      </button>
    </div>
  );
};

export default CartItem;
