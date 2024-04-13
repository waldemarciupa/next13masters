"use client";
import { useFormStatus } from "react-dom";
import { useToast } from "./useToast";

type AddToCart = {
	productName: string;
};

export const AddToCartButton = ({ productName }: AddToCart) => {
	const { pending } = useFormStatus();
	const { toast } = useToast();

	return (
		<button
			type="submit"
			onClick={() => {
				toast({
					title: "Item added to the cart",
					description: `${productName} has been added to the cart`,
				});
			}}
			disabled={pending}
			className="mt-4 rounded-sm border bg-slate-200 px-6 py-2 shadow-sm transition-shadow hover:shadow-sm disabled:cursor-wait disabled:bg-slate-300"
			data-testid="add-to-cart-button"
		>
			Add to cart
		</button>
	);
};
