import { useState } from "react";
import { FaRegStar } from "react-icons/fa";

export default function Reviews({ onSelectReview }) {
    const [hoverSelect, setHoverSelect] = useState(0);

    return (
        <div className="flex gap-5">
            {/* Render review stars and handle click events */}
            <div
                className={hoverSelect >= 1 ? "border-2 rounded-md p-2 bg-black text-white cursor-pointer" : "border-2 rounded-md p-2 cursor-pointer"}
                onClick={() => onSelectReview(1)}
                onMouseEnter={() => setHoverSelect(1)}
                onMouseLeave={() => setHoverSelect(0)}
            >
                <FaRegStar />
            </div>

            <div
                className={hoverSelect >= 2 ? "border-2 rounded-md p-2 bg-black text-white cursor-pointer" : "border-2 rounded-md p-2 cursor-pointer"}
                onClick={() => onSelectReview(2)}
                onMouseEnter={() => setHoverSelect(2)}
                onMouseLeave={() => setHoverSelect(0)}
            >
                <FaRegStar />
            </div>

            <div
                className={hoverSelect >= 3 ? "border-2 rounded-md p-2 bg-black text-white cursor-pointer" : "border-2 rounded-md p-2 cursor-pointer"}
                onClick={() => onSelectReview(3)}
                onMouseEnter={() => setHoverSelect(3)}
                onMouseLeave={() => setHoverSelect(0)}
            >
                <FaRegStar />
            </div>

            <div
                className={hoverSelect >= 4 ? "border-2 rounded-md p-2 bg-black text-white cursor-pointer" : "border-2 rounded-md p-2 cursor-pointer"}
                onClick={() => onSelectReview(4)}
                onMouseEnter={() => setHoverSelect(4)}
                onMouseLeave={() => setHoverSelect(0)}
            >
                <FaRegStar />
            </div>
            
            <div
                className={hoverSelect >= 5 ? "border-2 rounded-md p-2 bg-black text-white cursor-pointer" : "border-2 rounded-md p-2 cursor-pointer"}
                onClick={() => onSelectReview(5)}
                onMouseEnter={() => setHoverSelect(5)}
                onMouseLeave={() => setHoverSelect(0)}
            >
                <FaRegStar />
            </div>
        </div>
    );
}
