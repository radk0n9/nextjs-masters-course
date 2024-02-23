import { ShoppingCart } from "lucide-react";
import { ActiveLink } from "@/components/atoms/ActiveLink";
import { SearchInput } from "@/components/atoms/SearchInput";

const navLinks = [
	{ href: "/", label: "Home", exact: true },
	{ href: "/products", label: "All", exact: false },
	{ href: "/categories", label: "Categories", exact: false },
	{ href: "/categories/t-shirts", label: "T-Shirts", exact: false },
	{ href: "/categories/hoodies", label: "Hoodies", exact: false },
	{ href: "/categories/accessories", label: "Accessories", exact: false },
];

export const Navbar = () => {
	return (
		<nav className="sticky top-0 z-50 bg-zinc-200 bg-opacity-30 shadow backdrop-blur-lg backdrop-filter">
			<div className="mx-auto max-w-md px-12 sm:max-w-2xl md:max-w-6xl lg:max-w-7xl">
				<div className="relative flex h-16 justify-between">
					<ul className="flex gap-3 text-sm/5 font-semibold lg:text-lg/5">
						{navLinks.map((link, index) => (
							<li key={index} className="flex">
								<ActiveLink exact={link.exact} href={link.href}>
									{link.label}
								</ActiveLink>
							</li>
						))}
					</ul>
					<div className="flex items-center gap-8 text-sm/5 lg:text-lg/5">
						<SearchInput />
						<ul>
							<li className="flex">
								<ActiveLink exact={true} href={"/"}>
									<ShoppingCart className="h-[1.3em] w-[1.3em]" />
								</ActiveLink>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
