"use client";
import { useOptimistic } from "react";
import { IncrementProductQuantityButton } from "./IncrementProductQuantityButton";
import { type OrderItem } from "@/gql/graphql";
import { decrease, increase } from "@/utils";

type IncrementProductQuantityProps = {
	item: OrderItem;
};

export const IncrementProductQuantity = ({ item }: IncrementProductQuantityProps) => {
	const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(item.quantity);

	const changeItemQuantity = (
		func: (
			item: OrderItem,
			optimisticQuantity: number,
			setOptimisticQuantity: (action: number | ((pendingState: number) => number)) => void,
		) => void,
	) => {
		func(item, optimisticQuantity, setOptimisticQuantity);
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
