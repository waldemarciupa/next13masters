import Image from "next/image";
import { IncrementProductQuantity } from "../atoms/IncrementProductQuantity";
import { type OrderItem } from "@/gql/graphql";
import { formatPrice } from "@/utils";

export const CartItem = ({ item }: { item: OrderItem }) => {
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
						<IncrementProductQuantity quantity={item?.quantity ?? 0} itemId={item?.id} />
						<button className="mt-4 text-sm font-medium text-slate-900 underline">Remove</button>
					</div>
					<p className="small-caps mt-1 p-4 text-right text-sm  font-semibold  text-slate-900">
						{formatPrice((item?.product?.price ?? 0) / 100)}
					</p>
				</div>
			</div>
		</li>
	);
};
