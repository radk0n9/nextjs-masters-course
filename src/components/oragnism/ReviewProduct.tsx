import { Star } from "lucide-react";
import { getProductByIdReview } from "@/api/prodcuts";

export const ReviewProduct = async ({ productId }: { productId: string }) => {
	const reviews = await getProductByIdReview(productId);
	return (
		<>
			<div className="divide-y">
				{reviews.product?.reviews.map((review) => (
					<div className="flex flex-col gap-2 py-12" key={reviews.product?.id}>
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
		</>
	);
};
