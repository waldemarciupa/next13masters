"use client";
import { useOptimistic } from "react";
import { changeItemQuantity } from "@/app/cart/actions";
import { type OrderItem } from "@/gql/graphql";

type IncrementProductQuantityProps = {
	item: OrderItem;
};

export const IncrementProductQuantity = ({ item }: IncrementProductQuantityProps) => {
	const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(item.quantity);

	return (
		<form className="mt-8">
			<div className="flex">
				<button
					data-testid="decrement"
					className="h-6 w-6 border"
					formAction={async () => {
						setOptimisticQuantity(optimisticQuantity - 1);
						await changeItemQuantity(
							item.id,
							optimisticQuantity - 1,
							(optimisticQuantity - 1) * (item.product?.price ?? 0),
						);
					}}
				>
					-
				</button>
				<span className="w-8 text-center" data-testid="quantity">
					{optimisticQuantity}
				</span>
				<button
					data-testid="increment"
					className="h-6 w-6 border"
					formAction={async () => {
						setOptimisticQuantity(optimisticQuantity + 1);
						await changeItemQuantity(
							item.id,
							optimisticQuantity + 1,
							(optimisticQuantity + 1) * (item.product?.price ?? 0),
						);
					}}
				>
					+
				</button>
			</div>
		</form>
	);
};
