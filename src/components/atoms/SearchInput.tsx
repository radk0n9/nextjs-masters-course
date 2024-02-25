"use client";
import NextLink from "next/link";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebounce } from "@/utils/debounce";

export const SearchInput = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const searchQueryUrl = searchParams.get("query")?.toString();
	const [searchQuery, setSearchQuery] = useState<string>(searchQueryUrl || "");
	const [isTyping, setIsTyping] = useState<boolean>(true);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const timeout = setTimeout(() => {
			setSearchQuery(event.target.value);
			setIsTyping(false);
		}, 500);

		return () => clearTimeout(timeout);
	};
	const searchQueryDebounce = useDebounce(searchQuery, 500);

	useEffect(() => {
		if (searchQueryDebounce && !isTyping) {
			router.replace(`/search?query=${searchQueryDebounce}`);
		}
	}, [searchQueryDebounce, router, isTyping]);

	return (
		<>
			<div className="flex h-9 w-64 items-center justify-center gap-1 rounded-xl border bg-white">
				<input
					type="search"
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
