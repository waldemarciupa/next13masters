"use client";
import { useOptimistic } from "react";
import { type OrderItem } from "../molecules/CartItem";
import { IncrementProductQuantityButton } from "./IncrementProductQuantityButton";
import { decrease, increase } from "@/utils";

type IncrementProductQuantityProps = {
	cartId: string;
	cartTotal: number;
	item: OrderItem;
};

export const IncrementProductQuantity = ({
	cartId,
	cartTotal,
	item,
}: IncrementProductQuantityProps) => {
	const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(item.quantity);

	const changeItemQuantity = (
		func: (
			cartId: string,
			cartTotal: number,
			item: OrderItem,
			optimisticQuantity: number,
			setOptimisticQuantity: (action: number | ((pendingState: number) => number)) => void,
		) => void,
	) => {
		func(cartId, cartTotal, item, optimisticQuantity, setOptimisticQuantity);
	};

	return (
		<form className="mt-8">
			<div className="flex">
				<IncrementProductQuantityButton formAction={() => changeItemQuantity(decrease)}>
					-
				</IncrementProductQuantityButton>
				<span className="w-8 text-center" data-testid="quantity">
					{optimisticQuantity}
				</span>
				<IncrementProductQuantityButton formAction={() => changeItemQuantity(increase)}>
					+
				</IncrementProductQuantityButton>
			</div>
		</form>
	);
};
