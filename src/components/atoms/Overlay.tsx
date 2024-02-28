"use client";

import { useRouter } from "next/navigation";

export const Overlay = () => {
	const router = useRouter();
	return (
		<>
			<div
				onClick={() => router.back()}
				className="absolute inset-0 z-30 bg-zinc-700 bg-opacity-75"
			/>
		</>
	);
};
