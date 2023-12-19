import React from "react";
import CSS from "../assets/css.png";
import HTML from "../assets/html.png";
import JavaScript from "../assets/javascript.png";
import ReactLogo from "../assets/react.png";
import TailwindLogo from "../assets/tailwind.png";

function Skills() {
  return (
    <div
      id="skills"
      className="bg-[#111111] text-white font-bold text-xl grid grid-cols-2 gap-8 pr-3 pt-8"
      style={{ gridTemplateColumns: "3fr 1fr" }}
    >
      <div className="w-full h-screen  grid grid-cols-2 gap-4 text-center ml-16">
        <div className="shadow-md shadow-[#111111] hover:scale-110 duration-300">
          <img src={CSS} alt="CSS" className="w-20 mx-auto" />
          <p>CSS</p>
        </div>
        <div className="shadow-md shadow-[#111111] hover:scale-110 duration-300">
          <img src={HTML} alt="HTML" className="w-20 mx-auto" />
          <p>HTML</p>
        </div>
        <div className="shadow-md shadow-[#111111] hover:scale-110 duration-300">
          <img src={JavaScript} alt="JavaScript" className="w-20 mx-auto" />
          <p>JavaScript</p>
        </div>
        <div className="shadow-md shadow-[#111111] hover:scale-110 duration-300">
          <img src={ReactLogo} alt="React" className="w-20 mx-auto" />
          <p>React</p>
        </div>
        <div className="shadow-md shadow-[#111111] hover:scale-110 duration-300">
          <img src={TailwindLogo} alt="Tailwind" className="w-20 mx-auto" />
          <p>Tailwind</p>
        </div>
      </div>
      <div className=" pb-8 pl-4">
        <p className="text-2xl font-bold border-b-4 inline">Skills</p>
      </div>
    </div>
  );
}

export default Skills;
