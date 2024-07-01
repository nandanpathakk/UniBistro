import React, { useState } from 'react';
import { IoMdRemove } from "react-icons/io";
import { BarLoader } from "react-spinners";

export default function Cart({ items, removeFromCart, totalBill }) {
    const [loading, setLoading] = useState(false);
    const [pay, setPay] = useState("Pay");

    const paybill = () => {
        setLoading(true);
        setTimeout(() => {
            setPay("Paid");
            setLoading(false);
        }, 3000);
    };

    return (
        <div className="bg-gray-200 p-4 fixed bottom-0 right-0 m-4 rounded-lg shadow-md">
            <div className="text-lg font-semibold mb-4">Cart</div>
            {items.length === 0 ? (
                <p className="text-gray-600">Your cart is empty.</p>
            ) : (
                <div>
                    <div className="border-b border-gray-300 mb-4">
                        {items.map((item, index) => (
                            <div key={index} className="flex justify-between items-center mb-2">
                                <div className="flex-1 mr-5">{item.name}</div>
                                <div className="text-gray-700">₹ {item.price}</div>
                                <button
                                    onClick={() => removeFromCart(item)}
                                    className="flex items-center justify-center w-8 h-8 text-red-600 hover:text-red-700 focus:outline-none rounded-full transition duration-300"
                                >
                                    <IoMdRemove className="w-4 h-4" />
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center justify-between mb-4">
                        <div className="font-semibold">Total</div>
                        <div className="text-gray-700">₹ {totalBill}</div>
                    </div>
                    <div className="flex justify-center">
                        {loading ? (
                            <BarLoader color="#4169E1" />
                        ) : (
                            <button
                                onClick={paybill}
                                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none"
                            >
                                {pay}
                            </button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
