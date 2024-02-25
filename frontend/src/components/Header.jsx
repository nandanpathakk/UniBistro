import React, { useState } from "react"
import Logo from '../assets/Logo.svg';
import { Link, useLocation } from "react-router-dom";
import { CiSearch } from "react-icons/ci";


export default function Header() {

    const location = useLocation();
    // const isSelected = (path) => location.pathname === path;
    function isSelected(path){
        return location.pathname === path;
    }

    return <div>
        <div className="bg-[#79E777] flex justify-around items-center">
            <div className=" pl-[35px] pt-[39px]">
                <Link to={"/"}> 
                <img className="w-32 h-12" src={Logo} alt="Logo" />
                </Link>
            </div>
            <div className="flex items-center justify-between w-[569px] text-l font-red-hat font-medium">
                <p className={isSelected('/') ? ' text-white' : "text-black"}>
                    <Link to="/">Home</Link>
                </p>
        
                <p className={isSelected('/mess') ? 'text-white' : "text-black"}>
                    <Link to="/mess">Mess</Link>
                </p>
                <p className={isSelected('/canteen') ? 'text-white' : 'text-black'}>
                    <Link to="/canteen" >Canteen</Link>
                    </p>
                    <p className={isSelected('/teapost') ? 'text-white' : 'text-black'}>
                    <Link to="/teapost" >Tea Post</Link>
                    </p>
            </div>
            <div className="flex items-center justify-between w-[190px]">
                <div>
                <CiSearch className="w-6 h-6 text-white" />
                </div>
                <div>
                    <button className="border py-[3px] px-[30px] rounded-full text-[11px] font-bold text-white font-['Raleway']">Sign Up</button>
                </div>
            </div>

        </div>
    </div>
}