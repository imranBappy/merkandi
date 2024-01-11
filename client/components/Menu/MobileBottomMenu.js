"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { BiHomeAlt } from "react-icons/bi";

const MobileBottomMenu = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // User is scrolling down
        setVisible(false);
      } else {
        // User is scrolling up
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <div
        style={{
          display: visible ? "block" : "none",
        }}
      >
        <div className="w-full flex items-center h-16 bg-m fixed bottom-0 left-0 md:hidden ">
          <Link
            href="/"
            className="text-white leading-6 flex flex-col items-center w-full"
          >
            <BiHomeAlt fontSize="20" />
            Home
          </Link>
          <Link
            href="/shop"
            className="text-white leading-6 flex flex-col items-center w-full"
          >
            <BiHomeAlt fontSize="20" />
            Categories
          </Link>
          <Link
            href="/cart"
            className="text-white leading-6 flex flex-col items-center w-full"
          >
            <BiHomeAlt fontSize="20" />
            Cart
          </Link>
          <Link
            href="/dashboard"
            className="text-white leading-6 flex flex-col items-center w-full"
          >
            <BiHomeAlt fontSize="20" />
            Account
          </Link>
        </div>
      </div>
    </>
  );
};

export default MobileBottomMenu;
