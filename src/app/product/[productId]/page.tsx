import { notFound } from "next/navigation";
import { type Metadata } from "next";
import { Suspense } from "react";
import { cookies } from "next/headers";
import NextImage from "next/image";
import { revalidateTag } from "next/cache";
import { getProductsById, getProductsList } from "@/api/prodcuts";
import { Spinner } from "@/components/atoms/Spinner";
import { SuggestedProductsList } from "@/components/oragnism/SuggestedProdcuts";
import { formatPrice } from "@/utils/utils";
import { AddToCartButton } from "@/components/atoms/AddToCartButton";
import { getOrCreateCart, addProductToCard } from "@/api/cart";

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const product = await getProductsById(params.productId);
	return {
		title: product.product?.name,
		description: product.product?.description,
	};
};

export const generateStaticParams = async () => {
	const products = await getProductsList(20);
	return products.map((product) => ({
		productId: product.id,
	}));
};

export default async function SingleProductIdPage({ params }: { params: { productId: string } }) {
	const product = await getProductsById(params.productId);
	if (!product) {
		throw notFound();
	}

	async function addToCartAction(_formData: FormData) {
		"use server";

		const cart = await getOrCreateCart();
		cookies().set("cartId", cart?.cartFindOrCreate.id, { httpOnly: true, sameSite: "lax" });
		await addProductToCard(cart?.cartFindOrCreate.id, params.productId);
		revalidateTag("cart");
	}

	return (
		<article>
			<Suspense fallback={<Spinner />}>
				<div className="flex justify-center gap-5 ">
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
						<h1 className="text-xl font-bold tracking-tight md:text-2xl">
							{product.product?.name}
						</h1>
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
			</Suspense>
		</article>
	);
}
