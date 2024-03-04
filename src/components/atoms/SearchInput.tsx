"use client";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { type ChangeEvent, useEffect, useState, type FormEvent } from "react";
import { useDebounce } from "@/utils/debounce";

export const SearchInput = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const query = searchParams.get("query");
	const [searchQuery, setSearchQuery] = useState(query || "");
	const debouncedValue = useDebounce(searchQuery);

	const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(event.target.value);
	};

	const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		router.push(`/search?query=${searchQuery}`);
	};

	useEffect(() => {
		if (!debouncedValue) return;
		router.push(`/search?query=${debouncedValue}`);
	}, [debouncedValue, router]);

	return (
		<>
			<form onSubmit={handleOnSubmit}>
				<div className="flex h-8 w-64 items-center justify-center gap-1 rounded-xl border bg-white">
					<input
						type="search"
						name="searchQuery"
						onChange={handleOnChange}
						className="w-48 rounded-xl px-1 text-sm outline-none"
						placeholder="Search"
					/>
					<button
						type="submit"
						className="flex h-7 w-11 cursor-pointer items-center justify-center border-l bg-white transition-all duration-200 ease-in-out hover:rounded-lg hover:bg-zinc-300"
					>
						<Search className="h-[1.2em] w-[1.2em]" />
					</button>
				</div>
			</form>
		</>
	);
};
