import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <nav className="py-2 px-4 shadow-lg border-t-4 border-t-orange-500">
      <div className="max-w-7xl mx-auto flex items-center gap-4">
        <div className="w-5 cursor-pointer">
          <div className="h-[2px] bg-gray-600 mb-1"></div>
          <div className="h-[2px] bg-gray-600 mb-1"></div>
          <div className="h-[2px] bg-gray-600"></div>
        </div>
        <Link to="/" className="flex items-center gap-1.5">
          <img src={logo} alt="" className="w-4 invert" />
          <h1 className="text-2xl font-black">TechHub</h1>
        </Link>
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
        <div className="flex gap-1 ml-auto">
          <button className="py-1 px-2 text-xs bg-[#e1ecf4] rounded border border-[#7aa7c7] text-[#39749d] hover:bg-slate-300">
            Log in
          </button>
          <button className="py-1 px-2 text-xs bg-[#0a95ff] text-white rounded hover:opacity-90">
            Sign up
          </button>
          <Link
            to="/ask-question"
            className="py-1 px-2 bg-[#0a95ff] text-white rounded ml-auto hover:opacity-80"
          >
            Ask question
          </Link>
        </div>
      </div>
    </nav>
  );
}
