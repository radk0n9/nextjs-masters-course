export default async function SingleProdudctIdPage({
	params: { category, size },
}: {
	params: { category: string; size: string };
}) {
	return (
		<div className="mx-auto max-w-md text-center">
			<h1 className="p-2 text-2xl font-semibold">Category product</h1>
			<p className="font-semibold">Category: {category}</p>
			<p className="font-semibold">Size: {size}</p>
		</div>
	);
}
