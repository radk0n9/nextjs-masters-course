import { ActiveLink } from "@/components/atoms/ActiveLink";

export const ProdcustPagination = async () => {
	return (
		<div aria-label="pagination" className="flex justify-center gap-3">
			<ul className="mx-auto flex justify-center gap-2 p-1 text-base font-semibold">
				<li>
					<ActiveLink href={"/products/1"}>1</ActiveLink>
				</li>
				<li>
					<ActiveLink href={"/products/2"}>2</ActiveLink>
				</li>
			</ul>
		</div>
	);
};
