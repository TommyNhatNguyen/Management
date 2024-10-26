import React from "react";
import { Search, Settings } from "lucide-react";
import Link from "next/link";
type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="flex items-center justify-between bg-white px-4 py-3 dark:bg-black ">
      {/* Search bar */}
      <div className="flex items-center gap-8">
        <div className="relative flex h-min w-[200px]">
          <Search className="absolute left-[4px] top-1/2 mr-2 h-5 w-5 -translate-y-1/2 transfrom cursor-pointer dark:text-white" />
          <input
            type="search"
            placeholder="Search...."
            className="w-full rounded bg-gray-100 p-2 pl-8 placeholder-gray-500 focus:border-transparent focus:outline-none dark:bg-gray-700 dark:text-white dark:placeholder-white"
          />
        </div>
      </div>
      {/* Icons */}
      <div className="flex items-center">
        <Link
          href={"/settings"}
          className="h-min w-win rounded p-2 hover:bg-gray-100 duration-300 cursor-pointer"
        >
          <Settings className="h-6 w-6  dark:text-white" />
        </Link>
        <div className="ml-2 mr-5 hidden min-h-[2em] w-[0.1rem] bg-gray-200 md:inline-block"></div>
      </div>
    </div>
  );
};

export default Navbar;