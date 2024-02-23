"use client";
import NextLink from "next/link";
import { Search } from "lucide-react";
import { type ChangeEvent, useState } from "react";

const useSerachQuery = () => {
	const [searchQuery, setSearchQuery] = useState("");

	const handleChange = (p: ChangeEvent<HTMLInputElement>) => {
		if (p.target.value == "") {
			setSearchQuery(searchQuery);
		} else {
			setSearchQuery(p.target.value);
		}
	};
	return { searchQuery, handleChange };
};

export const SearchInput = () => {
	const { searchQuery, handleChange } = useSerachQuery();

	return (
		<>
			<div className="flex h-9 w-64 items-center justify-center gap-1 rounded-xl border bg-white">
				<input
					type="text"
					name="searchQuery"
					onChange={handleChange}
					className="w-48 rounded-xl px-1 text-sm outline-none"
					placeholder="Search"
				/>
				<NextLink
					href={`/search?query=${searchQuery}`}
					className="flex h-7 w-11 cursor-pointer items-center justify-center border-l bg-white transition-all duration-200 ease-in-out hover:rounded-lg hover:bg-zinc-300"
				>
					<Search className="h-[1.2em] w-[1.2em]" />
				</NextLink>
			</div>
		</>
	);
};
