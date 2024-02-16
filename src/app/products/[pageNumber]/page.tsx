export default function ProductsPageNumber({ params }: { params: { pageNumber: string } }) {
	return (
		<div>
			<p>{params.pageNumber}</p>
		</div>
	);
}
