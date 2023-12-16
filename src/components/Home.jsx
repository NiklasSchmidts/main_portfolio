import React from 'react'
import Myself from '../assets/myself.jpg'
import { TiArrowDownThick as ArrowDown } from "react-icons/ti";

function Home() {
    return (
        <div className='w-full h-screen bg-[#111111] flex justify-evenly flex-col lg:flex-row' >

            {/* description */}
            <div id='home' className='pl-20 md:pl-40 pt-10 pr-10 flex flex-col justify-center items-start h-full text-white font-semibold text-xl'>
                <h1 className='text-3xl'>Hi, my name is</h1>
                <h1 className='text-4xl font-bold'>Niklas Schmidts</h1>
                <h1 >I am a computer science student who has gained a passion for front-end development. </h1>
                <h1 >Besides the frontend, I also enjoy backend development. </h1>
                <h1 >This leads me to the preference for full-stack development. </h1>
                <button className='flex items-center border-solid border-2 border-white p-1 pl-2 mt-2 hover:p-3 duration-300'>
                    View About 
                    <span className='ml-1'>
                        <ArrowDown />
                    </span>
                </button>
            </div>

            {/* image */}
            <div className='flex items-center justify-center h-full text-white font-bold'>
                <img src={Myself} className='object-cover h-[400px] rounded-br-full px-10' />
            </div>
        </div>
    )
}

export default Home