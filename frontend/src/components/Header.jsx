import React, { useState } from "react";
import Logo from '../assets/Logo.svg';
import { Link, useLocation } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { IoIosMenu } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";

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
        <div className="flex items-center py-4 relative">
            <div className="pl-[2.18rem] pt-[0.93rem] mr-80">
                <Link to={"/"}>
                    <img className="w-32 h-12" src={Logo} alt="Logo" />
                </Link>
            </div>
            {/* Responsive menu toggler */}
            <div className="md:hidden">
                <button onClick={toggleMenu}>
                    <CiMenuFries />
                </button>
            </div>
            {/* Full-size menu */}
            <div className="hidden md:flex md:items-center md:justify-between md:w-[569px] text-lg font-red-hat font-medium">
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

            {/* Side Navbar */}
            <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform ${showMenu ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
                <div className="flex items-center justify-end p-4">
                    <button onClick={toggleMenu}>
                        <IoIosMenu />
                    </button>
                </div>
                <div className="flex flex-col items-start px-4 text-lg font-red-hat font-medium">
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
            </div>
        </div>
    );
}
