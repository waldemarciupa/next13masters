/// <reference types="stripe-event-types" />
import { type NextRequest } from "next/server";
import { Stripe } from "stripe";

export async function POST(request: NextRequest): Promise<Response | undefined> {
	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error("Missing STRIPE_SECRET_KEY");
	}

	if (!process.env.STRIPE_WEBHOOK_SECRET) {
		throw new Error("Missing STRIPE_WEBHOOK_SECRET");
	}

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2024-04-10",
		typescript: true,
	});

	const signature = request.headers.get("stripe-signature");

	if (!signature) {
		return new Response("No signature", { status: 401 });
	}

	const event = stripe.webhooks.constructEvent(
		await request.text(),
		signature,
		process.env.STRIPE_WEBHOOK_SECRET,
	) as Stripe.DiscriminatedEvent;

	switch (event.type) {
		case "checkout.session.completed": {
			event.data.object.metadata?.cartId;
		}
		case "checkout.session.async_payment_succeeded": {
			event.data.object;
		}
	}

	new Response("OK", { status: 200 });
}
