import React from "react";
import CSS from "../assets/css.png";
import HTML from "../assets/html.png";
import JavaScript from "../assets/javascript.png";
import ReactLogo from "../assets/react.png";
import TailwindLogo from "../assets/tailwind.png";
import { Link } from "react-scroll";
import { TiArrowDownThick as ArrowDown } from "react-icons/ti";


function Skills() {
  return (
    <div
      id="skills"
      className="bg-[#111111] grid grid-cols-2 gap-8 p-3"
      style={{ gridTemplateColumns: "2fr 1fr" }}
    >
      <div className="text-white font-bold text-xl w-full h-screen  grid grid-cols-2 gap-4 text-center ml-10">
        <div className="hover:scale-110 duration-300">
          <img src={CSS} alt="CSS" className="w-20 mx-auto" />
          <p>CSS</p>
        </div>
        <div className="text-white font-bold text-xl hover:scale-110 duration-300">
          <img src={HTML} alt="HTML" className="w-20 mx-auto" />
          <p>HTML</p>
        </div>
        <div className="text-white font-bold text-xl hover:scale-110 duration-300">
          <img src={JavaScript} alt="JavaScript" className="w-20 mx-auto" />
          <p>JavaScript</p>
        </div>
        <div className="text-white font-bold text-xl hover:scale-110 duration-300">
          <img src={ReactLogo} alt="React" className="w-20 mx-auto" />
          <p>React</p>
        </div>
        <div className="text-white font-bold text-xl hover:scale-110 duration-300">
          <img src={TailwindLogo} alt="Tailwind" className="w-20 mx-auto" />
          <p>Tailwind</p>
        </div>
      </div>
      <div className="ml-5 mr-10 pl-10">
        <p className="text-white text-2xl font-bold border-b-4 inline">
          Skills
        </p>
        <button className="text-white flex items-center border-solid border-2 border-white p-1 pl-2 mt-2 hover:p-3 duration-300">
          <Link to="contact" smooth={true} duration={500}>
            View Contact
          </Link>
          <span className="ml-1">
            <ArrowDown />
          </span>
        </button>
      </div>
    </div>
  );
}

export default Skills;
