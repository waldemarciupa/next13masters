import Image from "next/image";
import { IncrementProductQuantity } from "../atoms/IncrementProductQuantity";
import { CartRemoveItemButton as RemoveItem } from "../atoms/CartRemoveItemButton";
import { formatPrice } from "@/utils";

export type OrderItem = {
	id: string;
	quantity: number;
	total: number;
	product?:
		| { id: string; name: string; price: number; images: { url: string }[] }
		| null
		| undefined;
};

export type CartItem = {
	cartId: string;
	cartTotal: number;
	orderItem: OrderItem;
};

export const CartItem = ({ cartId, cartTotal, orderItem }: CartItem) => {
	return (
		<li className="py-4 sm:flex">
			<div className="flex-shrink-0 rounded-md border bg-slate-50">
				<div className="flex justify-center">
					<Image
						src={orderItem?.product?.images.at(0)?.url || "/product-images/placeholder.png"}
						alt={orderItem?.product?.name || "Product Image"}
						className="rounded-md"
						width={128}
						height={128}
					/>
				</div>
			</div>
			<div className="ml-4 w-full pt-4 sm:pt-0">
				<div className="flex justify-between">
					<div>
						<h3 className="text-sm font-medium text-gray-900">{orderItem?.product?.name}</h3>
						<IncrementProductQuantity cartId={cartId} cartTotal={cartTotal} item={orderItem} />
						<RemoveItem
							cartId={cartId}
							orderItemId={orderItem?.id}
							orderItemTotal={orderItem?.total}
							cartTotal={cartTotal}
						/>
					</div>
					<p className="small-caps mt-1 p-4 text-right text-sm  font-semibold  text-slate-900">
						{formatPrice((orderItem?.total ?? 0) / 100)}
					</p>
				</div>
			</div>
		</li>
	);
};
