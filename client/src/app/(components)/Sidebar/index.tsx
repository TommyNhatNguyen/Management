"use client";
import Image from "next/image";
import React, { useState } from "react";

type Props = {};

const Sidebar = (props: Props) => {
  const [showProjects, setShowProjects] = useState(true);
  const [showPriority, setShowPriority] = useState(true);
  const sidebarClassNames =
    "fixed flex-col flex h-full justify-between shadow-xl duration-300 z-40 dark:bg-black overflow-y-auto bg-white w-64 ";
  return (
    <div className={sidebarClassNames}>
      <div className="flex h-full w-full flex-col justify-start">
        {/* Top logo */}
        <div className="z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 pt-3 dark:bg-black ">
          <div className="text-xl font-bold text-gray-800 dark:text-white uppercase">
            Edlist
          </div>
        </div>
        {/* Team */}
        <div className="flex items-center gap-5 border-y-[1.5px] border-gray-200 px-8 py-4 dark:border-gray-700">
          <Image src={"/logo.png"} alt="Logo" width={40} height={40} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
