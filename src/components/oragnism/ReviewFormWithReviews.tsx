"use client";
import { Star } from "lucide-react";
import { useOptimistic } from "react";
import { addProductReviewAction } from "@/api/actions";
import { InputReviewForm } from "@/components/atoms/InputReviewForm";
import { RatingReviewForm } from "@/components/atoms/RatingReviewForm";
import { SumbitButtonReview } from "@/components/atoms/SubmitButtonReviewForm";
import { type ReviewItemFragment } from "@/gql/graphql";
import { reviewItemsForm } from "@/utils/review";

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
					{optimisticReviews.slice(-3).map((review) => (
						<div className="flex flex-col gap-2 py-12" key={review.id}>
							<div className="text-sm ">{review.author}</div>
							<div className="flex items-center gap-1 text-sm">
								<span className="font-bold ">{review.rating}/5</span>
								<div className="flex">
									{[1, 2, 3, 4, 5].map((star) => (
										<Star
											key={star}
											fill={star <= review.rating ? "gold" : "transparent"}
											color="gold"
											size={18}
										/>
									))}
								</div>
							</div>
							<span className="text-sm font-medium">{review.title}</span>
							<p className="cursive text-sm italic">{review.description}</p>
						</div>
					))}
				</div>
			</div>
		</>
	);
};
