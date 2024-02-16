import Link from "next/link";

export const ProdcustPagination = async () => {
	return (
		<div aria-label="pagination" className="">
			<Link href={"/products/1"}></Link>
			<Link href={"/products/1"}></Link>
		</div>
	);
};
