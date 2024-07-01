import React, { useState } from "react";
import Logo from '../assets/Logo.svg';
import { Link, useLocation } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

export default function Header() {
    const location = useLocation();

    function isSelected(path) {
        return location.pathname === path;
    }

    return (
            <div className="flex justify-around items-center py-4">
                <div className="pl-[35px] pt-[15px]">
                    <Link to={"/"}>
                        <img className="w-32 h-12" src={Logo} alt="Logo" />
                    </Link>
                </div>
                <div className="flex items-center justify-between w-[569px] text-lg font-red-hat font-medium">
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
