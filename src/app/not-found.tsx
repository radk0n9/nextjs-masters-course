import { ArrowDown, Frown } from "lucide-react";
import NextLink from "next/link";

export default function NotFound() {
	return (
		<div className="mt-10 flex flex-col items-center justify-center gap-2">
			<h1 className="flex gap-2 text-3xl font-bold">
				Page was not found <Frown className="animate-spinSlow h-[1.2em] w-[1.2em]" />
			</h1>
			<ArrowDown className="h-[1.5em] w-[1.5em] animate-bounce text-xl text-purple-700" />
			<NextLink href="/" className="text-xl font-semibold hover:underline">
				Back To Home
			</NextLink>
		</div>
	);
}
