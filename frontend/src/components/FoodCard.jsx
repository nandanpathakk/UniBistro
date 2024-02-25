import { useEffect, useState } from 'react';
import food from '../assets/food.jpeg';
import { CiStar } from "react-icons/ci";
import Reviews from './Reviews';
import { IoIosClose } from "react-icons/io";
import axios from 'axios';

export default function FoodCard({ name, price, image, addToCart, reviewGet, reviewPost }) {

    const [currentReview, setCurrenReview] = useState()

    const [isModalOpen, setIsModalOpen] = useState(false)

    const [review, setReview] = useState()


    useEffect(() => {

        axios.get(`${reviewGet}/${encodeURIComponent(name)}`)
            .then(function (response) {
                setReview(response.data.data)
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
            setCurrenReview(() => average.toFixed(2));
        }
    }, [review]);


    const postReview = (selectedReview) => {
        const dishName = name;
        axios.post(reviewPost, { dishName, dishRate: selectedReview })
            .then(function (response) {
                console.log('Review posted successfully:', response.data.message);
            })
        alert("Rated Successfully")
            .catch(function (error) {
                console.error('Error posting review:', error);
            });
    };

    return (
        // <div className="w-48 h-56 bg-[#1F1D2B] rounded-2xl relative mb-20">
        <div className="w-48 h-56 bg-[#1F1D2B] rounded-2xl relative mb-20 transition duration-300 ease-in-out transform hover:shadow-lg hover:ring-4 hover:ring-offset-2 hover:ring-blue-500 hover:ring-opacity-50 ">
            <div className="w-24 h-24 bg-white rounded-full absolute top-[-20%] left-[25.5%] flex items-center justify-center overflow-hidden">
                <img src={image} alt="Food" className="object-cover" />
            </div>
            <div className='flex flex-col text-white items-center justify-around h-[135px] w-48 absolute bottom-5'>
                <div className='flex items-center justify-between gap-10 w-36'>
                    <div>
                        <p className='font-["Barlow"] text-xl font-medium w-[70px]'>{name}</p>
                    </div>
                    <div className='text-l flex gap-1.5 items-center'>
                        <div>₹</div>
                        <div>{price}</div>
                    </div>
                </div>

                <div className='flex justify-between w-36'>
                    <div className='flex items-center gap-1'>
                        <p className='font-["Barlow"] text-sm'>{currentReview} </p>
                        <div><CiStar /></div>
                    </div>

                    <button
                        className="font-['Barlow'] text-sm px-3 py-1 text-gray-500 hover:text-gray-400 cursor-pointer"
                        onClick={() => setIsModalOpen(true)}
                    >
                        Rate
                    </button>
                </div>

                {isModalOpen && (
                    <div className='fixed inset-0 flex items-center justify-center'>
                        <div className='bg-white p-3 rounded-lg text-black'>

                            <div className='flex'>
                                <button onClick={() => setIsModalOpen(false)}> <IoIosClose className='mb-2' /> </button>
                                <div className='flex items-center justify-center w-[200px] mb-2'>
                                    <div className='text-sm'>Rate This Dish</div>
                                </div>
                            </div>
                            <div>
                                <Reviews onSelectReview={postReview} />
                            </div>
                        </div>
                    </div>
                )
                }

                <div>
                    <button
                        className="font-['Barlow'] text-sm rounded-xl border border-opacity-50 border-black px-3 py-1 mt- hover:text-white hover:ring-1 cursor-pointer"
                        onClick={() => addToCart({ name, price })}
                    >
                        Add
                    </button>
                </div>
            </div>

        </div>
    );
}
