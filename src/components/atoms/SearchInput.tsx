import NextLink from "next/link";
import { Search } from "lucide-react";

export const SearchInput = () => {
	return (
		<>
			<div className="flex items-center justify-center gap-2 rounded-md border bg-white">
				<NextLink
					href="/"
					className="flex h-full w-[40px] cursor-pointer items-center justify-center border-r bg-white"
				>
					<Search className="h-[1.3em] w-[1.3em]" />
				</NextLink>
				<input type="text" className="rounded-md p-1 text-sm outline-none" placeholder="Search" />
			</div>
		</>
	);
};
