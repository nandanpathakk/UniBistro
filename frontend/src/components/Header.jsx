import React, { useState } from "react";
import Logo from '../assets/Logo.svg';
import { Link, useLocation } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

export default function Header() {
    const location = useLocation();
    const [showMenu, setShowMenu] = useState(false); // State for showing/hiding the menu

    function isSelected(path) {
        return location.pathname === path;
    }

    // Function to toggle menu visibility
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className="flex justify-between items-center py-4">
            <div className="pl-[35px] pt-[15px]">
                <Link to={"/"}>
                    <img className="w-32 h-12" src={Logo} alt="Logo" />
                </Link>
            </div>
            {/* Responsive menu toggler */}
            <div className="md:hidden">
                <button onClick={toggleMenu}>
                    <svg
                        className="w-6 h-6 text-gray-800"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
            </div>
            {/* Full-size menu */}
            <div className={`md:flex md:items-center md:justify-between md:w-[569px] text-lg font-red-hat font-medium ${showMenu ? 'block' : 'hidden'}`}>
                <p className={isSelected('/') ? 'text-teal-600' : "text-gray-800"}>
                    <Link to="/">Home</Link>
                </p>
                <p className={isSelected('/mess') ? 'text-teal-600' : "text-gray-800"}>
                    <Link to="/mess">Mess</Link>
                </p>
                <p className={isSelected('/canteen') ? 'text-teal-600' : 'text-gray-800'}>
                    <Link to="/canteen">Canteen</Link>
                </p>
                <p className={isSelected('/teapost') ? 'text-teal-600' : 'text-gray-800'}>
                    <Link to="/teapost">Tea Post</Link>
                </p>
            </div>
            <div className="flex items-center justify-between w-[190px]">
                <div>
                    <CiSearch className="w-6 h-6 text-gray-800" />
                </div>
                <div>
                    <button className="border py-[3px] px-[30px] rounded-full text-[11px] font-bold text-white bg-teal-600 font-['Raleway']">
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
}
