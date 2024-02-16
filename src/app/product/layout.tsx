import { type ReactNode } from "react";

export default function ProdcutPageLayout({ children }: { children: ReactNode }) {
	return <div className="mx-auto max-w-2xl">{children}</div>;
}
