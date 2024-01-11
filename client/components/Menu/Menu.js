import Link from "next/link";
import React, { useState, useRef } from "react";
import CategoryMenu from "./CategoryMenu";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeTimer = useRef(null);

  const toggleMenu = () => {
    if (menuOpen) {
      closeMenu();
    } else {
      setMenuOpen(true);
      clearTimeout(closeTimer.current);
    }
  };

  const closeMenu = () => {
    closeTimer.current = setTimeout(() => {
      setMenuOpen(false);
    }, 300);
  };

  return (
    <div className="relative inline-block text-left w-full">
      <div>
        <button
          type="button"
          onClick={toggleMenu}
          className="flex items-center w-full focus:outline-none text-white p-4"
        >
          <svg
            className="text-white mr-2"
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
          Categories
        </button>
      </div>

      {menuOpen && (
        <div className="absolute left-0 w-full bg-white z-30">
          <CategoryMenu />
        </div>
      )}
    </div>
  );
};

export default Menu;
