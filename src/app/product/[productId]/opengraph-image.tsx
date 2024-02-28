import { ImageResponse } from "next/og";
import { getProductsById } from "@/api/prodcuts";

// export const runtime = "edge";
export const contentType = "image/png";
export const alt = "Open Graph Image For Single Product";

export const size = {
	width: 1200,
	height: 630,
};

export default async function OpenGraphImageForSingleProduct({
	params,
}: {
	params: { productId: string };
}) {
	const product = await getProductsById(params.productId);

	return new ImageResponse(
		(
			<div tw="flex flex-col w-full h-full items-center justify-center bg-white">
				<div tw="bg-gray-50 flex w-full">
					<div tw="flex flex-col md:flex-row w-full py-12 px-4 md:items-center justify-between p-8">
						<h2 tw="flex flex-col text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 text-left max-w-[50%]">
							<span tw="text-6xl">{product.product?.name}</span>
							<span tw="text-purple-400 text-lg">{product.product?.categories[0]?.name}</span>
							<span tw="text-2xl">{product.product?.description.slice(0, 100) + "..."}</span>
						</h2>
						<div tw="mt-8 flex md:mt-0">
							<div tw="flex rounded-md shadow">
								<div tw="flex items-center justify-center rounded-md border border-transparent bg-zinc-200 px-5 py-3 text-base font-medium text-white">
									{product.product?.images[0] && (
										<img
											tw=""
											src={product.product?.images[0]?.url}
											alt={product.product.images[0].alt}
											height={product.product.images[0].height / 2}
											width={product.product.images[0].width / 2}
										/>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		),
	);
}
