import { type ReactNode } from "react";

export default function ProductPageLayout({ children }: { children: ReactNode }) {
	return <div className="mx-auto max-w-2xl">{children}</div>;
}
