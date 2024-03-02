"use client";
import { useOptimistic } from "react";
import { addProductReviewAction } from "@/api/actions";
import { InputReviewForm } from "@/components/atoms/InputReviewForm";
import { RatingReviewForm } from "@/components/atoms/RatingReviewForm";
import { SumbitButtonReview } from "@/components/atoms/SubmitButtonReviewForm";
import { type ReviewItemFragment } from "@/gql/graphql";
import { reviewItemsForm } from "@/utils/review";
import { ReviewList } from "@/components/atoms/ReviewList";

export const ReviewFormWithReviews = ({
	productId,
	reviews,
}: {
	productId: string;
	reviews: ReviewItemFragment[];
}) => {
	const [optimisticReviews, setOptimisticReviews] = useOptimistic(
		reviews,
		(_currentOptimisticReviews, newReviews: ReviewItemFragment[]) => {
			return newReviews;
		},
	);

	return (
		<>
			<div className="mt-6 grid w-full border-t pt-6 md:grid-cols-2">
				<section>
					<h3 className="mb-5 text-xl font-semibold">Customer Reviews</h3>
					<form
						data-testid="add-review-form"
						action={async (formData: FormData) => {
							const title = formData.get("headline") as string;
							const content = formData.get("content") as string;
							const rating = parseInt(formData.get("rating") as string);
							const name = formData.get("name") as string;
							const email = formData.get("email") as string;
							const productId = formData.get("productId") as string;
							const optimisticReviews = [
								...reviews,
								{
									id: productId,
									rating: rating,
									description: content,
									email: email,
									author: name,
									title: title,
								},
							];
							setOptimisticReviews(optimisticReviews);
							await addProductReviewAction(formData);
						}}
					>
						<input type="hidden" name="productId" value={productId} />
						{reviewItemsForm.map((item) => {
							if (item.type === "rating") {
								return <RatingReviewForm key={item.name} />;
							}
							return (
								<InputReviewForm
									key={item.name}
									label={item.label}
									name={item.name}
									type={item.type}
									required={item.required}
									placeholder={item.placeholder}
								/>
							);
						})}
						<SumbitButtonReview />
					</form>
				</section>
				<div className="divide-y">
					<ReviewList reviews={optimisticReviews} />
				</div>
			</div>
		</>
	);
};
