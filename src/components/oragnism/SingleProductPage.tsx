import NextImage from "next/image";
import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";
import { StarIcon } from "lucide-react";
import { notFound } from "next/navigation";
import { SuggestedProductsList } from "@/components/oragnism/SuggestedProdcuts";
import { formatPrice } from "@/utils/utils";
import { ReviewFormWidget } from "@/components/oragnism/ReviewFormWidget";
import { AddToCartButton } from "@/components/atoms/AddToCartButton";
import { addProductToCard, getOrCreateCart } from "@/api/cart";
import { changeProductCardQuantityAction } from "@/api/actions";
import { getProductByIdReview, getProductsById } from "@/api/prodcuts";

export const SingleProductPage = async ({ productId }: { productId: string }) => {
	const product = await getProductsById(productId);
	const prodcutReview = await getProductByIdReview(productId);
	if (!product) {
		throw notFound();
	}
	async function addToCartAction(_formData: FormData) {
		"use server";

		const cart = await getOrCreateCart();
		cookies().set("cartId", cart?.cartFindOrCreate.id, { httpOnly: true, sameSite: "lax" });
		if (!product.product?.id) throw new Error("No product id");
		const existingItem = cart?.cartFindOrCreate.items.find(
			(item) => item.product.id === product.product?.id,
		);
		if (existingItem) {
			await changeProductCardQuantityAction(
				cart?.cartFindOrCreate.id,
				existingItem.product.id,
				existingItem.quantity + 1,
			);
		} else {
			await addProductToCard(cart?.cartFindOrCreate.id, product.product.id);
		}

		revalidateTag("cart");
	}
	if (!product.product) return null;

	return (
		<>
			<div className="flex justify-center gap-8">
				<div>
					{product.product?.images[0] && (
						<NextImage
							src={product.product.images[0].url}
							alt={product.product.images[0].alt}
							width={product.product.images[0].width}
							height={product.product.images[0].height}
							className="max-w-sm"
						/>
					)}
				</div>
				<div className="flex max-w-lg grow flex-col text-left">
					<h1 className="text-xl font-bold tracking-tight md:text-2xl">{product.product?.name}</h1>
					{product.product?.categories[0]?.name && (
						<p className="text-xs">{product.product?.categories[0]?.name}</p>
					)}
					<p className="md:xl my-2 text-lg font-semibold">
						{product.product?.price && <span>{formatPrice(product.product?.price / 100)}</span>}
					</p>
					<p data-testid="product-rating" className="flex items-center text-sm">
						<span>{(product.product.rating as number).toFixed(2)}</span>
						<span>/5</span>
						<StarIcon color="gold" />
					</p>
					<form action={addToCartAction}>
						<AddToCartButton />
					</form>
					<p className="mt-4 text-sm tracking-tight">{product.product?.description}</p>
				</div>
			</div>
			<div>
				<aside>
					{product.product?.categories[0]?.slug && (
						<SuggestedProductsList slug={product.product?.categories[0].slug} />
					)}
				</aside>
			</div>

			{product.product?.id && prodcutReview.product?.reviews && (
				<ReviewFormWidget productId={product.product.id} reviews={prodcutReview.product?.reviews} />
			)}
		</>
	);
};
