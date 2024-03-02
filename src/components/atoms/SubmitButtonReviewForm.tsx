"use client";
import { useFormStatus } from "react-dom";

export const SumbitButtonReview = () => {
	const formStatus = useFormStatus();

	return (
		<>
			<button
				className="mt-4 w-full max-w-md rounded-md border-4 border-transparent bg-purple-500 py-2 font-bold text-white transition-colors hover:border-4 hover:border-purple-900 hover:bg-purple-600"
				type="submit"
				disabled={formStatus.pending}
			>
				{formStatus.pending ? `Processing...` : "Submit Review"}
			</button>
		</>
	);
};
