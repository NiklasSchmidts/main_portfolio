import React from "react";
import { IoIosArrowDropupCircle as ArrowUp } from "react-icons/io";
import { Link } from "react-scroll";

function Bottom() {
  return (
    <div className="bg-white w-full h-[40px]">
      <div className="h-full flex justify-between items-center ml-20 mr-20">
        <h1 className="font-bold">Copyright © 2023 Niklas Schmidts</h1>
        <Link to="home" smooth={true} duration={500}>
          <ArrowUp className="text-black text-4xl cursor-pointer"></ArrowUp>
        </Link>
      </div>
    </div>
  );
}

export default Bottom;