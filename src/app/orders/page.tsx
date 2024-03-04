import { currentUser } from "@clerk/nextjs";

export default async function OrdersPage() {
	const user = await currentUser();
	const email = user?.emailAddresses[0]?.emailAddress;

	if (!email) {
		return <p>Nie masz emaila</p>;
	}
	return <></>;
}
