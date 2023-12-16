import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaXing } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import Logo from "../assets/logo.png"
import { Link } from 'react-scroll'
import { IoIosArrowDropupCircle as ArrowUp} from "react-icons/io";

function Navbar() {

    const [nav, setNav] = useState(false);
    const handleClick = () => {
        setNav(!nav);
    }

    return (
        <div className='bg-white fixed w-full h-[80px] flex justify-between items-center px-4 text-black text-3xl font-bold'>
            <div>
                <img src={Logo} alt="Logo" className='w-[50px]' />
            </div>

            {/* menu */}
            <ul className='hidden md:flex'>
                <li className='border-b-4 border-transparent hover:border-black duration-200'>Home</li>
                <li className='border-b-4 border-transparent hover:border-black duration-200'>About</li>
                <li className='border-b-4 border-transparent hover:border-black duration-200'>Skills</li>
                <li className='border-b-4 border-transparent hover:border-black duration-200'>Contact</li>
            </ul>

            {/* hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {nav ? <FaTimes className='text-white' /> : <FaBars className='text-black' />}
            </div>

            {/* mobile menu */}
            <div className={nav ? 'absolute top-0 left-0 w-full h-screen bg-[#111111] text-white flex flex-col justify-center items-center' : 'hidden'}>
                <ul>
                    <li className='py-6 text-4xl'>
                        <Link to="home" smooth={true} duration={500}>Home</Link>
                    </li>
                    <li className='py-6 text-4xl'>
                        <Link to='about' smooth={true} duration={500}>About</Link>
                    </li>
                    <li className='py-6 text-4xl'>
                        <Link to='skills' smooth={true} duration={500}>Skills</Link>
                    </li>
                    <li className='py-6 text-4xl'>
                        <Link to='contact' smooth={true} duration={500}>Contact</Link>
                    </li>
                </ul>
            </div>

            {/* social links */}
            <div className='hidden fixed md:flex flex-col top-[45%] left-0 font-light text-xl'>
                <ul>
                    <li className='ml-[-105px] hover:ml-[-10px] duration-300'>
                        <a href='https://www.linkedin.com/in/niklas-schmidts/' className='flex items-center text-white'>
                            <p className='pr-4'>LinkedIn </p> <FaLinkedin />
                        </a>
                    </li>
                    <li className='ml-[-63px] hover:ml-[-10px] duration-300'>
                        <a href='https://www.xing.com/profile/Niklas_Schmidts2/' className='flex items-center text-white'>
                            <p className='pr-4'>Xing </p> <FaXing />
                        </a>
                    </li>
                    <li className='ml-[-90px] hover:ml-[-10px] duration-300'>
                        <a href='https://github.com/NiklasSchmidts' className='flex items-center text-white'>
                            <p className='pr-4'>GitHub </p> <FaGithub />
                        </a>
                    </li>
                    <li className='ml-[-58px] hover:ml-[-10px] duration-300'>
                        <a href='/' className='flex items-center text-white'>
                            <p className='pr-4'>Mail </p> <HiOutlineMail />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar