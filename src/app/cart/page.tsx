import { redirect } from "next/navigation";
import { getCartByCookieId } from "@/api/cart";
import { CartList } from "@/ui/molecules/CartList";
import { type OrderItem, type CartFragment } from "@/gql/graphql";
import { CartTotal } from "@/ui/molecules/CartTotal";

export default async function Page() {
	const cart: CartFragment | undefined = await getCartByCookieId();

	if (!cart) {
		redirect("/");
	}

	return (
		<div className="mt-8 px-4 sm:px-8">
			<h1 className="text-3xl font-bold tracking-tight text-slate-900">Your Shopping Cart</h1>
			<CartList items={cart?.orderItems as OrderItem[]} />
			<CartTotal total={cart?.total ?? 0} />
			<div className="flex w-full justify-end">
				<button className="mt-8 w-full rounded-md bg-slate-900 py-3 text-sm font-medium text-white sm:w-3/6">
					Checkout
				</button>
			</div>
		</div>
	);
}
