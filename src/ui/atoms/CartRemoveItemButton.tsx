"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { removeItem } from "@/app/cart/actions";

type CartRemoveItemButtonProps = {
	cartId: string;
	orderItemId: string;
	cartTotal: number;
	orderItemTotal: number;
};

export function CartRemoveItemButton({
	cartId,
	orderItemId,
	cartTotal,
	orderItemTotal,
}: CartRemoveItemButtonProps) {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();

	return (
		<button
			disabled={isPending}
			onClick={() =>
				startTransition(async () => {
					await removeItem(cartId, orderItemId, cartTotal, orderItemTotal);
					router.refresh();
				})
			}
			className="mt-4 text-sm font-medium text-indigo-600 underline hover:text-indigo-500 disabled:cursor-wait disabled:text-slate-400"
		>
			Remove
		</button>
	);
}
