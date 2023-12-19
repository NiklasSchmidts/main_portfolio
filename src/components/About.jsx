import React from "react";
import { Link } from "react-scroll";
import { TiArrowDownThick as ArrowDown } from "react-icons/ti";

function About() {
  return (
    <div id="about" className="w-full h-screen bg-[#111111] text-white">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div
          className="w-full px-5 grid grid-cols-2 gap-8"
          style={{ gridTemplateColumns: "1fr 5fr" }}
        >
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-2xl font-bold border-b-4 inline">About</p>
          </div>
          <div>
            <p className="text-base font-medium">
              Through six months of practical experience at Siemens AG in the
              area of full stack development, I developed a keen interest in
              both front-end and back-end development. My bachelor thesis, which
              deals with React in more depth, also builds on this interest. I am
              looking forward to expanding my knowledge and implementing many
              interesting projects.
            </p>
            <button className="flex items-center border-solid border-2 border-white p-1 pl-2 mt-2 hover:p-3 duration-300">
              <Link to="skills" smooth={true} duration={500}>
                View Skills
              </Link>
              <span className="ml-1">
                <ArrowDown />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
