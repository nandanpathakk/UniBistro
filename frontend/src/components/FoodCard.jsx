import { useEffect, useState } from 'react';
import { CiStar } from "react-icons/ci";
import Reviews from './Reviews';
import { IoIosClose } from "react-icons/io";
import axios from 'axios';

export default function FoodCard({ name, price, image, addToCart, reviewGet, reviewPost }) {
    const [currentReview, setCurrentReview] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [review, setReview] = useState();

    useEffect(() => {
        axios.get(`${reviewGet}/${encodeURIComponent(name)}`)
            .then(function (response) {
                setReview(response.data.data);
            })
            .catch(function (error) {
                console.error('Error fetching reviews:', error);
            });
    }, [reviewGet, name]);

    useEffect(() => {
        if (review && review.length > 0) {
            const sum = review.reduce((accumulator, currentReview) => {
                return accumulator + parseInt(currentReview.dishRate);
            }, 0);

            const average = sum / review.length;
            setCurrentReview(() => average.toFixed(2));
        }
    }, [review]);

    const postReview = (selectedReview) => {
        const dishName = name;
        axios.post(reviewPost, { dishName, dishRate: selectedReview })
            .then(function (response) {
                console.log('Review posted successfully:', response.data.message);
            })
            .catch(function (error) {
                console.error('Error posting review:', error);
            });
        alert("Rated Successfully");
    };

    return (
        <div className="w-60 h-72 bg-gray-800 text-white shadow-md rounded-xl relative mb-20 transition duration-300 ease-in-out transform hover:shadow-lg hover:ring-4 hover:ring-offset-2 hover:ring-blue-500 hover:ring-opacity-50">
            <div className="w-24 h-24 bg-gray-600 rounded-full absolute top-[-20%] left-[33%] flex items-center justify-center overflow-hidden border-4 border-white shadow-md">
                <img src={image} alt="Food" className="object-cover w-full h-full" />
            </div>
            <div className='flex flex-col items-center justify-around h-full p-5 pt-12'>
                <div className='flex items-center justify-between gap-10 w-full'>
                    <div>
                        <p className='font-["Barlow"] text-lg font-medium w-full text-center'>{name}</p>
                    </div>
                    <div className='text-l flex gap-1.5 items-center'>
                        <div className="text-yellow-400 font-semibold">₹</div>
                        <div className="text-yellow-400 font-semibold">{price}</div>
                    </div>
                </div>
                <div className='flex justify-between w-full'>
                    <div className='flex items-center gap-1'>
                        <p className='font-["Barlow"] text-sm'>{currentReview || 'No reviews yet'}</p>
                        <div className="text-yellow-400"><CiStar /></div>
                    </div>
                    <button
                        className="font-['Barlow'] font-semibold text-sm px-3 py-1 bg-yellow-400 rounded-md hover:bg-yellow-300 cursor-pointer"
                        onClick={() => setIsModalOpen(true)}
                    >
                        Rate
                    </button>
                </div>

                {isModalOpen && (
                    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
                        <div className='bg-white p-6 rounded-lg text-black shadow-lg'>
                            <div className='flex justify-between items-center mb-4'>
                                <div className='text-lg font-semibold'>Rate This Dish</div>
                                <button onClick={() => setIsModalOpen(false)}><IoIosClose className='w-6 h-6 text-gray-800' /></button>
                            </div>
                            <div>
                                <Reviews onSelectReview={postReview} />
                            </div>
                        </div>
                    </div>
                )}
                <div>
                    <button
                        className="font-['Barlow'] text-sm rounded-xl border border-yellow-400 text-yellow-400 px-4 py-2 mt-4 hover:bg-yellow-400 hover:text-white transition duration-300"
                        onClick={() => addToCart({ name, price })}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}
