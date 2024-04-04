import Image from "next/image";
import { IncrementProductQuantity } from "../atoms/IncrementProductQuantity";
import { CartRemoveItemButton as RemoveItem } from "../atoms/CartRemoveItemButton";
import { type OrderItem } from "@/gql/graphql";
import { formatPrice } from "@/utils";

type CartItemProps = {
	orderId: string;
	item: OrderItem;
	total: number;
};

export const CartItem = ({ orderId, item, total }: CartItemProps) => {
	return (
		<li className="flex py-4">
			<div className="flex-shrink-0 rounded-md border bg-slate-50">
				<Image
					src={item?.product?.images.at(0)?.url || "/product-images/placeholder.png"}
					alt={item?.product?.name || "Product Image"}
					className="h-32 w-32 rounded-md"
					width={128}
					height={128}
				/>
			</div>
			<div className="ml-4 w-full">
				<div className="flex justify-between">
					<div>
						<h3 className="text-sm font-medium text-gray-900">{item?.product?.name}</h3>
						<IncrementProductQuantity item={item} />
						<RemoveItem
							orderId={orderId}
							orderItemId={item?.id}
							itemTotal={item?.total}
							total={total}
						/>
					</div>
					<p className="small-caps mt-1 p-4 text-right text-sm  font-semibold  text-slate-900">
						{formatPrice((item?.total ?? 0) / 100)}
					</p>
				</div>
			</div>
		</li>
	);
};
