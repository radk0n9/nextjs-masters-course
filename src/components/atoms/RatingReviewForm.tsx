"use client";
import { StarIcon } from "lucide-react";
import { useState } from "react";

export const RatingReviewForm = () => {
	const [rating, setRating] = useState(0);
	const [clickedStars, setClickedStars] = useState(0);

	const handleMouseOver = (star: number) => {
		if (clickedStars === 0) {
			setRating(star);
		}
	};

	const handleMouseLeave = () => {
		if (!clickedStars) {
			setRating(0);
		}
	};

	const handleClick = (star: number) => {
		setRating(star);
		setClickedStars(star);
	};

	return (
		<>
			<span className="text-sm text-gray-600">Rating</span>
			<div className="mb-3 mt-1 flex items-center">
				{[1, 2, 3, 4, 5].map((star) => (
					<label
						key={star}
						className={`cursor-pointer ${
							star <= rating || star <= clickedStars ? "text-yellow-500" : "text-gray-300"
						}`}
						onMouseOver={() => handleMouseOver(star)}
						onMouseLeave={handleMouseLeave}
						onClick={() => handleClick(star)}
					>
						<input type="radio" name="rating" value={star} className="sr-only" />
						<StarIcon
							color="gold"
							fill={star <= rating || star <= clickedStars ? "gold" : "transparent"}
						/>
					</label>
				))}
			</div>
		</>
	);
};
