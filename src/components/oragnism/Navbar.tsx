import { ShoppingCart } from "lucide-react";
import { Suspense } from "react";
import { type Route } from "next";
import { ActiveLink } from "@/components/atoms/ActiveLink";
import { SearchInput } from "@/components/atoms/SearchInput";
import { getOrCreateCart } from "@/api/cart";

const navLinks = [
	{ href: "/", label: "Home", exact: true },
	{ href: "/products", label: "All", exact: false },
	{ href: "/categories", label: "Categories", exact: false },
	{ href: "/categories/t-shirts", label: "T-Shirts", exact: false },
	{ href: "/categories/hoodies", label: "Hoodies", exact: false },
	{ href: "/categories/accessories", label: "Accessories", exact: false },
];

export async function Navbar() {
	const cart = await getOrCreateCart();
	const qunatity = cart.cartFindOrCreate.items.length || 0;
	return (
		<div className="sticky top-0 z-20  bg-zinc-200 bg-opacity-30 shadow backdrop-blur-lg backdrop-filter">
			<div className="mx-auto max-w-md px-12 sm:max-w-2xl md:max-w-6xl lg:max-w-7xl">
				<div className="relative flex h-16 justify-between">
					<nav className="flex ">
						<ul className="flex gap-3 text-sm/5 font-semibold lg:text-lg/5">
							{navLinks.map((link, index) => (
								<li key={index} className="flex">
									<ActiveLink exact={link.exact} href={link.href as Route}>
										{link.label}
									</ActiveLink>
								</li>
							))}
						</ul>
					</nav>
					<div className="flex items-center gap-8 text-sm/5 lg:text-lg/5">
						<Suspense>
							<SearchInput />
						</Suspense>
						<ul className="flex h-full">
							<li className="">
								<ActiveLink exact={true} href={"/cart" as Route}>
									<ShoppingCart className="h-[1.3em] w-[1.3em]" />
									<span className="ml-2 text-sm/5 font-semibold lg:text-lg/5">{qunatity}</span>
								</ActiveLink>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
