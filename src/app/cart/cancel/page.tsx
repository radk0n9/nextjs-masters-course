import { redirect } from "next/navigation";
import Stripe from "stripe";

export default async function CartCancelPage({
	searchParams,
}: {
	searchParams: { sessionId?: string };
}) {
	if (!searchParams.sessionId) {
		redirect("/");
	}

	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error("Missing STRIPE_SECRET_KEY");
	}

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2023-10-16",
		typescript: true,
	});

	const session = stripe.checkout.sessions.retrieve(searchParams.sessionId);

	return (
		<div>
			<h2>{(await session).payment_status}</h2>
			<p>{(await session).status}</p>
		</div>
	);
}
