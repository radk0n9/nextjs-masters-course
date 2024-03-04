"use client";
import { Suspense, useOptimistic } from "react";
import { addProductReviewAction } from "@/api/actions";
import { type ReviewItemFragment } from "@/gql/graphql";
import { ReviewList } from "@/components/atoms/ReviewList";
import { ReviewForm } from "@/components/atoms/ReviewForm";
import { Spinner } from "@/components/atoms/Spinner";

export const ReviewFormWidget = ({
	productId,
	reviews,
}: {
	productId: string;
	reviews: ReviewItemFragment[];
}) => {
	const [optimisticReviews, setOptimisticReviews] = useOptimistic(reviews);

	return (
		<>
			<div className="mt-6 grid w-full border-t pt-6 md:grid-cols-2">
				<section>
					<h3 className="mb-5 text-xl font-semibold">Customer Reviews</h3>
					<ReviewForm
						productId={productId}
						formAction={async (formData: FormData) => {
							setOptimisticReviews((prev) => [
								...prev,
								{
									id: "",
									rating: parseInt(formData.get("rating") as string),
									description: formData.get("content") as string,
									email: formData.get("email") as string,
									author: formData.get("name") as string,
									title: formData.get("headline") as string,
									createdAt: new Date().toISOString(),
								},
							]);
							await addProductReviewAction(formData);
						}}
					/>
				</section>
				<Suspense fallback={<Spinner />}>
					<div className="divide-y">
						<ReviewList reviews={optimisticReviews} />
					</div>
				</Suspense>
			</div>
		</>
	);
};
