import { ProdcutsSortSelect } from "@/components/atoms/ProductsSortSelect";

export const ProductsHeader = ({ pageNumber }: { pageNumber: string[] }) => {
	return (
		<>
			<div className="mb-5 flex justify-between">
				<div className="flex items-center justify-end">
					<h1 className="text-center text-2xl font-semibold">Page {pageNumber}</h1>
				</div>
				<ProdcutsSortSelect />
			</div>
		</>
	);
};
