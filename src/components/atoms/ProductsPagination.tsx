import { ActiveLink } from "@/components/atoms/ActiveLink";

export const ProdcustPagination = async () => {
	return (
		<div aria-label="pagination" className="mx-auto mt-5 w-fit rounded-lg bg-zinc-200">
			<ul className="mx-auto flex justify-center gap-1 p-2 text-lg font-semibold">
				<li>
					<ActiveLink href={"/products/1"}>1</ActiveLink>
				</li>
				<li>
					<ActiveLink href={"/products/2"}>2</ActiveLink>
				</li>
				<li>
					<ActiveLink href={"/products/3"}>3</ActiveLink>
				</li>
				<li>
					<ActiveLink href={"/products/4"}>4</ActiveLink>
				</li>
			</ul>
		</div>
	);
};
