import { formatPrice } from "@/utils/utils";

export const OrderSummary = ({ totalPrice }: { totalPrice: number }) => {
	return (
		<>
			<div className="flex flex-col gap-1">
				<h2 className="text-xl font-semibold">Order Summary</h2>
				<p className="flex justify-between">
					<span>Order Total</span>
					<span>{formatPrice(totalPrice / 100)}</span>
				</p>
			</div>
		</>
	);
};
