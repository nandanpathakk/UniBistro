import React, { useState, useEffect } from 'react';
import Header from './Header';
import FoodCard from './FoodCard';
import axios from 'axios';
import loadingfood from '../assets/loadingFood.gif';
import Cart from './Cart';
import food from '../assets/food.jpeg'

export default function Menu({ place, api, reviewGet, reviewPost}) {
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
            .then(function(response) {
                setMenu(response.data?.data);
                setLoading(false);
        });
    }, []);

    return (
        <div className="bg-[#79E777] min-h-screen">
            <Header />
            <div>
                <p className="font-red-hat text-9xl font-bold text-[#1F1D2B] ml-16 my-8">{place}</p>
            </div>
            {loading ? (
                // loading gif
                <div className="flex items-center justify-center">
                    <img className="w-60 h-48" src={loadingfood} alt="loading gif" />
                </div>
            ) : (
                <div className="ml-16 mt-20 grid grid-cols-5">
                    {menu.map((data, index) => (
                        <FoodCard key={index} name={data.dishName} price={data.dishPrice} image={food} addToCart={addItemToCart} reviewGet={reviewGet} reviewPost={reviewPost} />
                    ))}
                </div>
            )}
            <Cart items={cartItems} removeFromCart={removeFromCart} totalBill={totalBill}/>
        </div>
    );
}
