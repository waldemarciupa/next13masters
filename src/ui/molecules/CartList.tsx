import { CartItem } from "./CartItem";
import { type CartFragment } from "@/gql/graphql";

type CartListProps = {
	cart: CartFragment;
};

export const CartList = async ({ cart }: CartListProps) => {
	return (
		<ul className="mt-8 divide-y divide-gray-200 border-b border-t border-gray-200">
			{cart.orderItems?.map((orderItem) => (
				<CartItem
					cartId={cart.id}
					cartTotal={cart.total}
					orderItem={orderItem}
					key={orderItem.id}
				/>
			))}
		</ul>
	);
};
