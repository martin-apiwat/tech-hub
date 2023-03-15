import React from "react";
import { Globe } from "react-feather";

export default function SideBar() {
  return (
    <div className="pl-2 text-gray-600 text-sm">
      <div className="my-5 text-black">Home</div>
      <div className="text-xs">PUBLIC</div>
      <div className="">
        <div className="flex flex-col gap-1">
          <div className="flex gap-0.5">
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
