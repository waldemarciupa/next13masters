"use client";
import { useOptimistic } from "react";
import { changeItemQuantity } from "@/app/cart/actions";

export const IncrementProductQuantity = ({
	quantity,
	itemId,
}: {
	quantity: number;
	itemId: string;
}) => {
	const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(quantity);

	return (
		<form className="mt-8">
			{/* TODO: quantity */}
			<div className="flex">
				<button
					data-testid="decrement"
					className="h-6 w-6 border"
					formAction={async () => {
						setOptimisticQuantity(optimisticQuantity - 1);
						await changeItemQuantity(itemId, optimisticQuantity - 1);
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
						await changeItemQuantity(itemId, optimisticQuantity + 1);
					}}
				>
					+
				</button>
			</div>
		</form>
	);
};
