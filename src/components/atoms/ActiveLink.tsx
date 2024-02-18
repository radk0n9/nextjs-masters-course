"use client";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";
import { type Route } from "next";

export const ActiveLink = <T extends string>({
	href,
	exact,
	children,
}: {
	href: Route<T>;
	exact: boolean;
	children: ReactNode;
}) => {
	const currentPathname = usePathname();
	const isActive = exact ? currentPathname == href : currentPathname.startsWith(href);

	return (
		<Link
			href={href}
			className={clsx(
				"flex h-full items-center border-b-2 border-transparent px-4 py-2 hover:border-zinc-300",
				isActive && "border-purple-950 hover:border-purple-950",
			)}
			aria-current={isActive ? "page" : undefined}
		>
			{children}
		</Link>
	);
};

// className={clsx(`brightness-90`, {brightness-100: isActive})}
//  lassName={clsx(`brightness-90`, isActive && `bg-zinc-300)}
