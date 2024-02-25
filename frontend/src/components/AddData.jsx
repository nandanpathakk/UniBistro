import { useState } from "react";
import axios from "axios";
import { RiImageAddLine } from "react-icons/ri";



export default function AddData() {
    const [dishImage, setDishImage] = useState();
    const [dishName, setDishName] = useState("");
    const [dishPrice, setDishPrice] = useState("");

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                setDishImage(file);
            };
        } else {
            alert("Please select an image file.");
        }
    };

    const handleSubmit = () => {
        if (!dishImage || !dishPrice || !dishName) {
            alert("Please fill all the fields");
            return;
        }

        const formData = new FormData();
        formData.append("dishImage", dishImage);
        formData.append("dishName", dishName);
        formData.append("dishPrice", dishPrice);
        console.log(formData)

        axios.post("https://unibistro-backend.onrender.com/create", formData)
            .then(function (response) {
                console.log("data added successfully", response.data);
                setDishImage("");
                setDishName("");
                setDishPrice("");
            })
            .catch((error) => {
                console.log("error in posting data");
            });
    };

    return (
        // <div className="flex flex-col justify-center items-center h-screen">
        <div>
            <div className="font-bold text-5xl mb-8 text-[#1F1D2B]">
                Add Your Dish
            </div>
            <div className="flex items-center bg-[#79E777] p-7 rounded-xl">
                <div className="flex flex-col gap-5 m-5 w-[500px]">
                    <input
                        value={dishName}
                        onChange={(e) => setDishName(e.target.value)}
                        className="border p-3 rounded-md" type="text" placeholder="Enter Dish Name" />

                    <input
                        value={dishPrice}
                        onChange={(e) => setDishPrice(e.target.value)}
                        className="border p-3 rounded-md" type="number" placeholder="Enter Dish Price" />

                    <div className="flex justify-center">

                        <label
                            className="border border-black px-4 py-2 rounded-md  border-dashed flex items-center gap-3 hover:border-solid "
                            for="img">
                            <RiImageAddLine className="h-5 w-5" />
                            <p>Select Image</p>
                        </label>
                        <input type="file" id="img" name="img" accept="image/*"
                            onChange={handleFileChange}
                            className="hidden" />
                    </div>


                    <div className="flex justify-center items-center">
                    <button onClick={handleSubmit}
                        className="px-8 py-1 bg-black text-white hover:bg-white rounded-md hover:text-black">Submit</button>
                    </div>
                    
                </div>

                <div>
                    {dishImage && <img src={URL.createObjectURL(dishImage)} alt="Dish-Image" />}
                </div>
            </div>
        </div>
    );
}
