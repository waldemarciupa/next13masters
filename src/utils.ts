import { changeItemQuantity } from "./app/cart/actions";
import { type OrderItem } from "./ui/molecules/CartItem";

export const formatPrice = (price: number) => {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	}).format(price);
};

export const increase = async (
	cartId: string,
	cartTotal: number,
	item: OrderItem,
	optimisticQuantity: number,
	setOptimisticQuantity: (action: number | ((pendingState: number) => number)) => void,
) => {
	setOptimisticQuantity(optimisticQuantity + 1);
	await changeItemQuantity(
		cartId,
		cartTotal + (item.product?.price ?? 0),
		item,
		optimisticQuantity + 1,
		(optimisticQuantity + 1) * (item.product?.price ?? 0),
	);
};

export const decrease = async (
	cartId: string,
	cartTotal: number,
	item: OrderItem,
	optimisticQuantity: number,
	setOptimisticQuantity: (action: number | ((pendingState: number) => number)) => void,
) => {
	setOptimisticQuantity(optimisticQuantity - 1);
	await changeItemQuantity(
		cartId,
		cartTotal - (item.product?.price ?? 0),
		item,
		optimisticQuantity - 1,
		(optimisticQuantity - 1) * (item.product?.price ?? 0),
	);
};
