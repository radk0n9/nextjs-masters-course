"use client";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";

export const ActiveLink = ({
	href,
	exact,
	children,
}: {
	href: string;
	exact: boolean;
	children: ReactNode;
}) => {
	const currentPathname = usePathname();
	const isActive = exact ? currentPathname == href : currentPathname.startsWith(href);

	return (
		<Link
			href={{ pathname: href }}
			className={clsx(
				"flex h-full items-center border-b-2 px-4 py-2 ",
				(isActive && " border-purple-900 hover:border-purple-900") ||
					" border-transparent hover:border-zinc-300",
			)}
			aria-current={isActive ? "page" : undefined}
		>
			{children}
		</Link>
	);
};

// className={clsx(`brightness-90`, {brightness-100: isActive})}
//  lassName={clsx(`brightness-90`, isActive && `bg-zinc-300)}
