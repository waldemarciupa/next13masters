import { CartItem } from "./CartItem";
import { type OrderItem } from "@/gql/graphql";

type CartListProps = {
	items: OrderItem[];
	id: string;
	total: number;
};

export const CartList = async ({ items, id, total }: CartListProps) => {
	return (
		<ul className="mt-8 divide-y divide-gray-200 border-b border-t border-gray-200">
			{items?.map((item) => <CartItem item={item} orderId={id} total={total} key={item.id} />)}
		</ul>
	);
};
