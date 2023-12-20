import React from "react";
import { IoIosArrowDropupCircle as ArrowUp } from "react-icons/io";
import { Link } from "react-scroll";

function Bottom() {
  return (
    <div className="bg-white w-full h-[40px]">
      <div className="h-full flex items-center ml-20 mr-20">
        <h1 className="font-bold text-xs md:text-lg">Copyright © 2023 Niklas Schmidts</h1>
      </div>
      <div className="fixed z-10 bottom-10 right-10">
        <Link to="menu" smooth={true} duration={500}>
          <ArrowUp className="text-white text-5xl cursor-pointer"></ArrowUp>
        </Link>
      </div>
    </div>
  );
}

export default Bottom;