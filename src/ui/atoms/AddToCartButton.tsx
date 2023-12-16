"use client";
 import { useFormStatus } from 'react-dom'

export const AddToCartButton = () => {
	const { pending } = useFormStatus();

	return (
		<button
			type="submit"
			disabled={pending}
			className="mt-4 rounded-sm border bg-slate-200 px-6 py-2 shadow-sm transition-shadow hover:shadow-sm disabled:cursor-wait disabled:bg-slate-300"
			data-testid="add-to-cart-button"
		>
			Add to cart
		</button>
	);
};
