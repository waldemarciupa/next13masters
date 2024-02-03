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

	const { orderItems, id, total } = cart;

	return (
		<div className="mt-8 px-4 sm:px-8">
			<h1 className="text-3xl font-bold tracking-tight text-slate-900">Your Shopping Cart</h1>
			<CartList items={orderItems as OrderItem[]} id={id} total={total} />
			<CartTotal total={total} />
			<div className="flex w-full justify-end">
				<button
					disabled={!total}
					className="mt-8 w-full rounded-md bg-slate-900 py-3 text-sm font-medium text-white transition-colors duration-300 ease-in-out hover:bg-slate-800 hover:text-white disabled:cursor-not-allowed disabled:bg-slate-400 sm:w-3/6"
				>
					Checkout
				</button>
			</div>
		</div>
	);
}
