import NextImage from "next/image";
import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";
import { SuggestedProductsList } from "@/components/oragnism/SuggestedProdcuts";
import { formatPrice } from "@/utils/utils";
import { type ProdcutsByIdQuery } from "@/gql/graphql";
import { ReviewFormWithReviews } from "@/components/oragnism/ReviewFormWithReviews";
import { AddToCartButton } from "@/components/atoms/AddToCartButton";
import { addProductToCard, getOrCreateCart } from "@/api/cart";

type ProductItemListProps = {
	product: ProdcutsByIdQuery;
};

export const SingleProductPage = async ({ product }: ProductItemListProps) => {
	async function addToCartAction(_formData: FormData) {
		"use server";

		const cart = await getOrCreateCart();
		cookies().set("cartId", cart?.cartFindOrCreate.id, { httpOnly: true, sameSite: "lax" });
		if (!product.product?.id) throw new Error("No product id");
		await addProductToCard(cart?.cartFindOrCreate.id, product.product.id);
		revalidateTag("cart");
	}
	if (!product.product) return null;

	return (
		<>
			<div className="flex justify-center gap-5">
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
				<div className="mr-14 max-w-md text-left">
					<h1 className="text-xl font-bold tracking-tight md:text-2xl">{product.product?.name}</h1>
					{product.product?.categories[0]?.name && (
						<p className="text-xs">{product.product?.categories[0]?.name}</p>
					)}
					<p className="md:xl my-2 text-lg font-semibold">
						{product.product?.price && <span>{formatPrice(product.product?.price / 100)}</span>}
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

			{product.product?.id && (
				<ReviewFormWithReviews productId={product.product.id} reviews={product.product.reviews} />
			)}
		</>
	);
};
