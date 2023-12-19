import React from 'react'
import Myself from '../assets/myself.jpg'
import { TiArrowDownThick as ArrowDown } from "react-icons/ti";
import { Link } from 'react-scroll';

function Home() {
    return (
      <div className="w-full h-screen  bg-[#111111] flex justify-evenly flex-col lg:flex-row">
        {/* description */}
        <div
          id="home"
          className="flex flex-col justify-center items-start h-full text-white font-medium md:pl-32 lg:pt-0 text-base md:text-xl p-10"
        >
          <h1 className="">Hi, my name is</h1>
          <h1 className="font-bold">Niklas Schmidts</h1>
          <h1>
            I am a computer science student who has developed a strong passion
            for front-end programming.{" "}
          </h1>
          <h1>Besides the frontend, I also enjoy backend development. </h1>
          <h1>
            This dual passion led me to turn to the world of full-stack
            development.
          </h1>
          <button className="flex items-center border-solid border-2 border-white p-1 pl-2 mt-2 hover:p-3 duration-300">
            <Link to="about" smooth={true} duration={500}>
              View About
            </Link>
            <span className="ml-1">
              <ArrowDown />
            </span>
          </button>
        </div>

        {/* image */}
        <div className="flex justify-center items-center lg:pr-10">
          <img
            alt="myself"
            src={Myself}
            className="object-cover lg:h-[350px] h-[250px] rounded-br-full"
          />
        </div>
      </div>
    );
}

export default Home