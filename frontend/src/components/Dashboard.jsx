import { useEffect, useState } from "react"
import axios from "axios"
import Header from "./Header"
import { RiDeleteBin6Line } from "react-icons/ri";
import { CgAddR } from "react-icons/cg";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import AddData from "./AddData"
import { IoCloseSharp } from "react-icons/io5";

export default function Dashboard({ getApi, delApi, delAllApi, postApi, place}) {

    const [menu, setMenu] = useState([]);
    const [todaysMenu, setTodaysMenu] = useState([]);
    const [isModelOpen, setisModelOpen] = useState(false);

    useEffect(() => {
        axios.get("https://unibistro-backend.onrender.com/")
            .then(function (response) {
                setMenu(response.data.data)
            })
    }, [])

    useEffect(() => {
        axios.get(getApi)
            .then(function (response) {
                setTodaysMenu(response.data?.data)
            })
    }, [todaysMenu])

    const addToTodaysMenu = (item) => {
        axios.post(postApi, item)
            .then(function (response) {
                console.log("Item added to database", response)
            })
            .catch(function (error) {
                console.error("Error posting item to database:", error);
            });
    };


    const removeFromTodaysMenu = (item) => {
        axios.delete(`${delApi}/${item._id}`)
            .then(function (response) {
                console.log("deleted item succesfully", response)
            })
            .catch((error) => {
                console.log("an error occured while deleting data", error)
            })

    }

    const clearTodaysMenu = () => {
        axios.delete(delAllApi)
            .then(function (response) {
                console.log("Deleted every item", response)
            })
            .catch((error) => {
                console.log("an error occured while deleting data", error)
            })
    }


    return (
        <div className="bg-[#79E777]">
            <Header />
            <div className="text-5xl text-[#07143B] font-semibold my-12 ml-36">{place}</div>
            <div className="flex justify-around">
                <div className="bg-[#1F1D2B] bg-opacity-60 text-[#07143B] w-96 rounded-t-[24px]">
                    <div className="m-5 p-5 border-b font-bold flex items-center justify-between">
                        <div>Menu</div>
                        <div>
                            <button onClick={() => setisModelOpen(true)}>
                                <CgAddR className="w-5 h-5" />
                            </button>

                                <Modal isOpen={isModelOpen} onRequestClose={() => setisModelOpen(false)} ariaHideApp={false} className="modal flex justify-center items-center h-screen bg-transparent">
                                    <div className="bg-white rounded-lg p-6">
                                        <button onClick={() => setisModelOpen(false)}><IoCloseSharp className="w-5 h-5" /></button>
                                        <AddData />
                                    </div>

                                </Modal>


                        </div>
                    </div>


                    {menu.map((data) => {
                        return <div key={data.id} >
                            <div className="p-5 m-5 border-b border-white border-opacity-20 flex items-center justify-between">
                                <div>{data.dishName}</div>
                                <button className="bg-[#EA6A12] rounded-full w-12 h-8 text-xl" onClick={() => addToTodaysMenu(data)}>+</button>
                            </div>
                        </div>
                    })}
                </div>

                <div className="bg-white bg-opacity-60 text-[#07143B] w-96 rounded-t-[24px]">
                    <div className="m-5 p-5 border-b border-black font-bold flex items-center justify-between">
                        <div>Today's Menu</div>
                        <div>
                            <button onClick={clearTodaysMenu}>
                                <RiDeleteBin6Line />
                            </button>
                        </div>
                    </div>

                    {todaysMenu.map((data) => {
                        return <div key={data.id} >
                            <div className="p-5 m-5 border-b border-[#333] border-opacity-20 flex items-center justify-between">
                                <div>{data.dishName}</div>
                                <button className="bg-[#EA6A12] rounded-full w-12 h-8 text-xl" onClick={() => removeFromTodaysMenu(data)}>-</button>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>

    )
}