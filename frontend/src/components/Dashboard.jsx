import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CgAddR } from "react-icons/cg";
import Modal from "react-modal";
import { IoCloseSharp } from "react-icons/io5";
import AddData from "../components/AddData"


export default function Dashboard({ getApi, delApi, delAllApi, postApi, place, password }) {
    const [menu, setMenu] = useState([]);
    const [todaysMenu, setTodaysMenu] = useState([]);
    const [isModelOpen, setisModelOpen] = useState(false);
    const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(true);
    const [passwordInput, setPasswordInput] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        axios.get("https://unibistro-backend.onrender.com/")
            .then(function (response) {
                setMenu(response.data.data);
            });
    }, []);

    useEffect(() => {
        axios.get(getApi)
            .then(function (response) {
                setTodaysMenu(response.data?.data);
            });
    }, [todaysMenu]);

    const addToTodaysMenu = (item) => {
        axios.post(postApi, item)
            .then(function (response) {
                console.log("Item added to database", response);
            })
            .catch(function (error) {
                console.error("Error posting item to database:", error);
            });
    };

    const removeFromTodaysMenu = (item) => {
        axios.delete(`${delApi}/${item._id}`)
            .then(function (response) {
                console.log("deleted item successfully", response);
            })
            .catch((error) => {
                console.log("an error occurred while deleting data", error);
            });
    };

    const clearTodaysMenu = () => {
        axios.delete(delAllApi)
            .then(function (response) {
                console.log("Deleted every item", response);
            })
            .catch((error) => {
                console.log("an error occurred while deleting data", error);
            });
    };

    const handlePasswordSubmit = () => {
        if (passwordInput === password) {
            setIsLoggedIn(true);
            setIsPasswordModalOpen(false); 
        } else {
            alert("Incorrect password. Please try again.");
            setPasswordInput("");
        }
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <Header />
            {isLoggedIn ? (
                <div className="container mx-auto mt-12">
                    <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">{place}</h1>
                    <div className="flex justify-around space-x-8">
                        <div className="w-1/3 bg-white rounded-lg shadow-lg p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-bold text-gray-800">Menu</h2>
                                <button onClick={() => setisModelOpen(true)}>
                                Add dish <CgAddR className="w-6 h-6 text-gray-800" />
                                </button>
                                <Modal isOpen={isModelOpen} onRequestClose={() => setisModelOpen(false)} ariaHideApp={false} className="modal flex justify-center items-center h-screen bg-transparent">
                                    <div className="bg-white rounded-lg p-6 shadow-lg">
                                        <button onClick={() => setisModelOpen(false)}><IoCloseSharp className="w-6 h-6 text-gray-800" /></button>
                                        <AddData />
                                    </div>
                                </Modal>
                            </div>
                            <div className="space-y-4">
                                {menu.map((data) => (
                                    <div key={data.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm">
                                        <div className="text-gray-800">{data.dishName}</div>
                                        <button className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center" onClick={() => addToTodaysMenu(data)}>+</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="w-1/3 bg-white rounded-lg shadow-lg p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-bold text-gray-800">Today's Menu</h2>
                                <button onClick={clearTodaysMenu}>
                                    <RiDeleteBin6Line className="w-6 h-6 text-gray-800" />
                                </button>
                            </div>
                            <div className="space-y-4">
                                {todaysMenu.map((data) => (
                                    <div key={data.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm">
                                        <div className="text-gray-800">{data.dishName}</div>
                                        <button className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center" onClick={() => removeFromTodaysMenu(data)}>-</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <Modal isOpen={isPasswordModalOpen} className="modal flex justify-center items-center h-screen bg-transparent">
                    <div className="bg-white rounded-lg p-6 shadow-lg">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Enter Password</h2>
                        <input
                            type="password"
                            value={passwordInput}
                            onChange={(e) => setPasswordInput(e.target.value)}
                            className="border border-gray-300 p-2 rounded-md w-full mb-4"
                            placeholder="Password"
                        />
                        <button onClick={handlePasswordSubmit} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Login</button>
                        <div className="text-sm text-gray-300 font-semibold flex justify-center">
                            <div>
                            "Password in {password}"
                            </div>
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    );
}
