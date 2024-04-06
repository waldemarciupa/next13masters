import { changeItemQuantity } from "./app/cart/actions";
import { type OrderItem } from "./gql/graphql";

export const formatPrice = (price: number) => {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	}).format(price);
};

export const increase = async (
	item: OrderItem,
	optimisticQuantity: number,
	setOptimisticQuantity: (action: number | ((pendingState: number) => number)) => void,
) => {
	setOptimisticQuantity(optimisticQuantity + 1);
	await changeItemQuantity(
		item.id,
		optimisticQuantity + 1,
		(optimisticQuantity + 1) * (item.product?.price ?? 0),
	);
};

export const decrease = async (
	item: OrderItem,
	optimisticQuantity: number,
	setOptimisticQuantity: (action: number | ((pendingState: number) => number)) => void,
) => {
	setOptimisticQuantity(optimisticQuantity - 1);
	await changeItemQuantity(
		item.id,
		optimisticQuantity - 1,
		(optimisticQuantity - 1) * (item.product?.price ?? 0),
	);
};
