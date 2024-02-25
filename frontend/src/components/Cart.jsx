import React, { useState } from 'react';
import { FaLeaf, FaRegThumbsDown } from 'react-icons/fa';
import { IoMdRemove } from "react-icons/io";
import { BarLoader } from "react-spinners";

export default function Cart({ items, removeFromCart, totalBill }) {

    const [loading, setLoading] = useState(false)
    const [pay, setPay] = useState("Pay")

    const paybill = () => {
        setLoading(true)
        setTimeout(() => {
            setPay("Paid")
            setLoading(false)
        }, 3000);
        
    }

    return (
        <div className="bg-white p-4 fixed bottom-0 right-0 m-4 rounded-lg shadow-md">
            <div className="text-lg font-semibold">Cart</div>
            {
                items.length === 0 ? (
                    " "
                ) : (
                    <div>
                        <div className='border-b'>
                            {items.map((item, index) => (
                                <div key={index} className="flex justify-between mb-1 w-52 p-2">
                                    <div>{item.name}</div>
                                    <div>₹ {item.price}</div>
                                    <button onClick={() => removeFromCart(item)}><IoMdRemove className='hover:text-red-600' /></button>
                                </div>
                            ))}
                        </div>
                        <div className='flex items-center justify-between w-[10.3rem] p-2'>
                            <div>Total</div>
                            <div>₹ {totalBill}</div>
                        </div>
                        <div className='flex justify-center items-center'>

                            {
                                loading === true ? (
                                    <BarLoader color="#4169E1" />
                                ) : <button
                                    onClick={paybill}
                                    className='w-full border p-1 bg-[#4169E1] rounded-md text-white'>{pay}</button>
                            }


                        </div>
                    </div>
                )
            }


        </div>
    );
}
