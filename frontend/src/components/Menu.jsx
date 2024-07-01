import React, { useState, useEffect } from 'react';
import Header from './Header';
import FoodCard from './FoodCard';
import axios from 'axios';
import loadingfood from '../assets/loadingFood.gif';
import Cart from './Cart';
import food from '../assets/food.jpeg'

export default function Menu({ place, api, reviewGet, reviewPost }) {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cartItems, setCartItems] = useState([]);
    const [totalBill, setBill] = useState(0)

    const addItemToCart = (item) => {
        setCartItems([...cartItems, item]);
        setBill((bill) => bill + parseInt(item.price))
    };

    const removeFromCart = (itemToRemove) => {
        setCartItems(cartItems.filter(item => item !== itemToRemove))
        setBill((bill) => bill - parseInt(itemToRemove.price))
    };

    useEffect(() => {
        setLoading(true);
        axios.get(api)
            .then(function (response) {
                setMenu(response.data?.data);
                setLoading(false);
            });
    }, []);

    return (
        <div className="min-h-screen">
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"> </div></div>
            <Header />
            <div>
                <p className="font-red-hat md:text-9xl text-3xl font-bold text-[#1F1D2B] ml-16 my-8">{place}</p>
            </div>
            {loading ? (
                // loading gif
                <div className="flex items-center justify-center">
                    <img className="w-60 h-48" src={loadingfood} alt="loading gif" />
                </div>
            ) : (
                <div className="ml-16 mt-20 grid md:grid-cols-5 grid-cols-1">
                    {menu.map((data, index) => (
                        <FoodCard key={index} name={data.dishName} price={data.dishPrice} image={food} addToCart={addItemToCart} reviewGet={reviewGet} reviewPost={reviewPost} />
                    ))}
                </div>
            )}
            <Cart items={cartItems} removeFromCart={removeFromCart} totalBill={totalBill} />
        </div>
    );
}
