import { useState } from "react";
import Header from "../components/Header";
import figure10 from "../assets/figure10.svg";
import figure9 from "../assets/figure9.svg";
import group from "../assets/Group.svg";
import { Link } from "react-router-dom";

export default function Home() {
    const [showOptionsAdmin, setShowOptionsAdmin] = useState(false);
    const [showOptonMenu, setShowOptonMenu] = useState(false);

    return (
        <div className="min-h-screen relative">
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]">
                </div>
            </div>
            <Header />
            <div className="flex flex-col mt-[3.12rem] ml-[12.68rem] gap-9">
                <div className="md:text-[7.5rem]/[6.87rem] text-6xl font-bold font-red-hat text-[#1F1D2B]">
                    <p>Bunk</p>
                    <p className="text-[#BED754]">Eat</p>
                    <p>Repeat</p>
                </div>
                <div className="md:flex md:flex-row md:gap-10 gap-3 flex flex-col font-['Raleway'] font-medium">
                    <div>
                        <button className="border border-black-100 border-teal-600 text-teal-600 rounded-full md:w-[11.25rem] w-32 md:py-[0.62rem] py-[0.3rem] md:text-lg text-xs" onClick={() => setShowOptionsAdmin(!showOptionsAdmin)}>Admin Login</button>
                        {showOptionsAdmin && (
                            <ul className="absolute border mt-2 py-2 bg-white shadow-lg rounded-md w-40">
                                <Link to={"/dashboard/mess"}>
                                    <li className="cursor-pointer px-4 py-2 hover:bg-gray-100">Mess</li>
                                </Link>
                                <Link to={"/dashboard/canteen"}>
                                    <li className="cursor-pointer px-4 py-2 hover:bg-gray-100">Canteen</li>
                                </Link>
                                <Link to={"/dashboard/tp"}>
                                    <li className="cursor-pointer px-4 py-2 hover:bg-gray-100">Tea Post</li>
                                </Link>
                            </ul>
                        )}
                    </div>
                    <div>
                        <button className="border border-black-100 border-teal-600 bg-teal-600 text-white rounded-full md:w-[11.25rem] w-32 md:py-[0.62rem] py-[0.3rem] md:text-lg text-xs" onClick={() => { setShowOptonMenu(!showOptonMenu) }}>Menu</button>
                        {showOptonMenu && (
                            <ul className="absolute border mt-2 py-2 bg-white shadow-lg rounded-md w-40">
                                <Link to={"/mess"}>
                                    <li className="cursor-pointer px-4 py-2 hover:bg-gray-100">Mess</li>
                                </Link>
                                <Link to={"/canteen"}>
                                    <li className="cursor-pointer px-4 py-2 hover:bg-gray-100">Canteen</li>
                                </Link>
                                <Link to={"/tp"}>
                                    <li className="cursor-pointer px-4 py-2 hover:bg-gray-100">Tea Post</li>
                                </Link>
                            </ul>
                        )}
                    </div>
                </div>
            </div>
            <img className="absolute top-[3.125rem] h-[25rem]" src={figure10} alt="Figure 10" />
            <img className="absolute bg-r top-[29.9rem] h-[10rem] left-[1.875rem]" src={figure9} alt="Figure 9" />
            <img className="hidden md:flex md:absolute md:top-[10.58rem] md:h-[30.37rem] md:left-[70.2rem]" src={group} alt="Group" />
        </div>
    );
}
