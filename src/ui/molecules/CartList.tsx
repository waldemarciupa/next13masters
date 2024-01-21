import { CartItem } from "./CartItem";
import { type OrderItem } from "@/gql/graphql";

export const CartList = async ({ items }: { items: OrderItem[] }) => {
	return (
		<ul className="mt-8 divide-y divide-gray-200 border-b border-t border-gray-200">
			{items?.map((item) => <CartItem item={item} key={item.id} />)}
		</ul>
	);
};
