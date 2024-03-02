"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const ProdcutsSortSelect = () => {
	const [sort, setSort] = useState("");
	const router = useRouter();

	useEffect(() => {
		sort.length && router.replace(`?sort=${sort}`);
	}, [sort, router]);

	return (
		<>
			<div className="flex">
				<select
					className="h-full w-48 cursor-pointer rounded-md text-sm font-light shadow-md outline-none focus:ring focus:ring-purple-400 focus:ring-opacity-50"
					value={sort}
					onChange={(event) => {
						setSort(event.target.value);
					}}
				>
					<option value="default">Choose a sort option</option>
					<option value="priceASC" data-testid="sort-by-price">
						Price (Low to High)
					</option>
					<option value="priceDESC" data-testid="sort-by-price">
						Price (High to Low)
					</option>
					<option value="nameASC">Name (A to Z)</option>
					<option value="nameDESC">Name (Z to A)</option>
					<option value="ratingASC" data-testid="sort-by-rating">
						Rating (Low to High)
					</option>
					<option value="ratingDESC" data-testid="sort-by-rating">
						Rating (High to Low)
					</option>
				</select>
			</div>
		</>
	);
};
