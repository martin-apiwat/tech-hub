import React from "react";
import logo from "../assets/logo.png";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <nav className="py-2 px-4 shadow-lg border-t-4 border-t-orange-500">
      <div className="max-w-7xl mx-auto flex items-center">
        <div className="w-5">
          <div className="h-[2px] bg-gray-600 mb-1"></div>
          <div className="h-[2px] bg-gray-600 mb-1"></div>
          <div className="h-[2px] bg-gray-600"></div>
        </div>
        <img src={logo} alt="" className="w-4 ml-4 invert" />
        <h1 className="text-2xl font-black ml-1">TechHub</h1>
        <ul className="flex gap-1 ml-4">
          <li className="py-1 px-3 cursor-pointer text-sm text-gray-600 transition-colors rounded-full hover:bg-gray-200 hover:text-black">
            About
          </li>
          <li className="py-1 px-3 cursor-pointer text-sm text-gray-600 transition-colors rounded-full hover:bg-gray-200 hover:text-black">
            Contact
          </li>
          <li className="py-1 px-3 cursor-pointer text-sm text-gray-600 transition-colors rounded-full hover:bg-gray-200 hover:text-black">
            Tags
          </li>
        </ul>
      </div>
    </nav>
  );
}
