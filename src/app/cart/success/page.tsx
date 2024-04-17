import Link from "next/link";
import { redirect } from "next/navigation";
import { Stripe } from "stripe";

export default async function CartSuccessPage({
	searchParams,
}: {
	searchParams: { sessionId?: string };
}) {
	if (!searchParams.sessionId) {
		redirect("/");
	}

	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error("Stripe secret key not set");
	}

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2024-04-10",
		typescript: true,
	});

	const session = await stripe.checkout.sessions.retrieve(searchParams.sessionId ?? "");

	if (session.payment_status === "paid") {
		return (
			<div className="pt-20 text-center">
				<h1>Payment successful</h1>
				<p className="mb-4">Thank you for your purchase</p>
				<Link
					href={{
						pathname: "/",
					}}
					className="text-blue-700 underline"
				>
					Continue shopping
				</Link>
			</div>
		);
	}
}
