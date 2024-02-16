"use client";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";
import { type Route } from "next";

export const ActiveLink = <T extends string>({
	href,
	children,
}: {
	href: Route<T>;
	children: ReactNode;
}) => {
	const currentPathname = usePathname();
	console.log(currentPathname[href.length]);
	const isActive =
		(href === "/" && currentPathname === "/") ||
		(href !== "/" &&
			currentPathname.startsWith(href) &&
			(currentPathname[href.length] === "/" || currentPathname.length === href.length));
	return (
		<Link
			href={href}
			className={clsx("rounded-lg px-4 py-2 hover:bg-zinc-300", isActive && "bg-zinc-300")}
			aria-current={isActive ? "page" : undefined}
		>
			{children}
		</Link>
	);
};

// className={clsx(`brightness-90`, {brightness-100: isActive})}
//  lassName={clsx(`brightness-90`, isActive && `bg-zinc-300)}
