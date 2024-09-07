import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FaBars, FaTimes, } from 'react-icons/fa';
import { FiMoon, FiSun } from "react-icons/fi";

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    useEffect(() => {
        if (nav) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
    }, [nav]);

    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (

        <nav className="bg-[#1a1a1d] p-4">
            <div className="flex justify-between items-center">

                <div><Link to="/"><img src="../HJ.png" className="h-10 transition duration-500 hover:scale-105 md:ml-2"></img></Link></div>
                <ul className="hidden md:flex space-x-10 md:mr-3">
                    <li><button onClick={toggleTheme} className="text-white text-xl"> {theme === "dark" ? <FiSun /> : <FiMoon />}</button></li>
                    <li><Link to="/portfolio" className="text-white font-semibold hover:text-gray-400 duration-500">Portfolio</Link></li>
                    <li><Link to="/info" className="text-white font-semibold hover:text-gray-400 duration-500">Om mig</Link></li>
                </ul>

                <div className="md:hidden flex space-x-12">
                    <button onClick={toggleTheme} className="md:hidden text-white text-2xl"> {theme === "dark" ? <FiSun /> : <FiMoon />}</button>
                    <div onClick={handleClick} className="md:hidden z-50">{!nav ? <FaBars className="text-3xl text-white" /> : <FaTimes className="text-3xl text-white" />}</div>
                </div>

                <ul className={`absolute top-0 left-0 w-full h-screen bg-[#1a1a1d] flex flex-col justify-center items-center transition-transform duration-500 z-40 ${nav ? "opacity-100 translate-y-0" : "opacity-100 -translate-y-full"}`}>
                    <div className="absolute top-24">
                        <li className="py-6 text-4xl">
                            <div><Link onClick={handleClick} to="/"><img src="../HJ.png" className="h-16"></img></Link></div>
                        </li>
                    </div>
                    <li className="py-6 text-4xl">
                        <Link onClick={handleClick} to="/portfolio" className="text-white font-semibold hover:text-gray-400 duration-500">Portfolio</Link>
                    </li>
                    <li className="py-6 text-4xl">
                        <Link onClick={handleClick} to="/info" className="text-white font-semibold hover:text-gray-400 duration-500">Om mig</Link>
                    </li>
                </ul>
            </div>
        </nav>
        
    )
}

export default Navbar;

