import { type ReactNode } from "react";
import { ProdcustPagination } from "@/components/atoms/ProductsPagination";

export default function ProductsPageLayout({ children }: { children: ReactNode }) {
	return (
		<div>
			{children}
			<div>
				<ProdcustPagination />
			</div>
		</div>
	);
}
