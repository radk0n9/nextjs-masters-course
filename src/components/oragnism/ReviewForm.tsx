import { addProductReviewAction } from "@/api/actions";
import { InputReviewForm } from "@/components/atoms/InputReviewForm";
import { RatingReviewForm } from "@/components/atoms/RatingReviewForm";
import { SumbitButtonReview } from "@/components/atoms/SubmitButtonReviewForm";
import { reviewItemsForm } from "@/utils/review";

export const ReviewForm = ({ productId }: { productId: string }) => {
	return (
		<>
			<section>
				<h3 className="mb-5 text-xl font-semibold">Customer Reviews</h3>
				<form data-testid="add-review-form" action={addProductReviewAction}>
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
							/>
						);
					})}
					<SumbitButtonReview />
				</form>
			</section>
		</>
	);
};
