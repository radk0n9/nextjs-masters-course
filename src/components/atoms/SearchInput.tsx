"use client";
import NextLink from "next/link";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebounce } from "@/utils/debounce";
// const useSerachQuery = () => {
// 	const [searchQuery, setSearchQuery] = useState("");
// 	const [redirectTimer, setRedirectTimer] = useState(null as unknown as NodeJS.Timeout);
// 	const router = useRouter();

// 	const handleChange = (p: ChangeEvent<HTMLInputElement>) => {
// 		setSearchQuery(encodeURIComponent(p.target.value));
// 		clearTimeout(redirectTimer);

// 		if (p.target.value == "") {
// 			setSearchQuery(searchQuery);
// 		} else {
// 			console.log(searchQuery);
// 			setRedirectTimer(
// 				setTimeout(() => {
// 					router.push(`/search?query=${searchQuery}`);
// 				}, 500),
// 			);
// 		}
// 	};
// 	return { searchQuery, handleChange };
// };

export const SearchInput = () => {
	// const { searchQuery, handleChange } = useSerachQuery();

	const router = useRouter();
	const searchParams = useSearchParams();
	const searchQueryUrl = searchParams.get("query")?.toString();
	const [searchQuery, setSearchQuery] = useState<string>(searchQueryUrl || "");

	const searchQueryDebounce = useDebounce(searchQuery, 500);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const searchQuery = event.target.value;
		if (searchQuery.length <= 1) {
			setSearchQuery("Not enought characters");
		} else {
			setSearchQuery(searchQuery);
		}
	};

	useEffect(() => {
		if (searchQueryDebounce) {
			router.push(`/search?query=${searchQueryDebounce}`);
		}
	}, [searchQueryDebounce, router]);

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
