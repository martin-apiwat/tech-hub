import React from "react";
import { Globe } from "react-feather";
import { useLocation } from "react-router-dom";

export default function SideBar() {
  const location = useLocation();

  return (
    <div className="pl-2 text-gray-600 text-sm">
      <div className="my-5 text-black">Home</div>
      <div className="text-xs">PUBLIC</div>
      <div className="">
        <div className="space-y-1">
          <div
            className={`flex gap-0.5 ${
              location.pathname === "/" ||
              location.pathname.startsWith("/questions/")
                ? "bg-gray-500"
                : ""
            }`}
          >
            <Globe className="w-4 h-4" />
            Questions
          </div>
          <div>Tags</div>
          <div>Users</div>
          <div>Companies</div>
        </div>
      </div>
    </div>
  );
}
