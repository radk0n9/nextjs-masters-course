import { redirect } from "next/navigation";
import Stripe from "stripe";

export default async function CartSuccessPage({
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
		<div className="flex flex-col items-center justify-center">
			<h1 className="mt-10 text-3xl font-semibold">Thank you for order in our store!</h1>
			<div className="mt-2 flex items-center gap-1 border-t pt-2 text-lg font-normal">
				<h2 className="flex ">Your payment status:</h2>
				<p className="flex capitalize">{(await session).payment_status}</p>
			</div>

			{/* <p>{(await session).status}</p> */}
		</div>
	);
}
