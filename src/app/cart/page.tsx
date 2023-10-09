import { redirect } from "next/navigation";
import { getCartByCookieId } from "@/api/cart";
import { formatPrice } from "@/utils";
import { IncrementProductQuantity } from "@/ui/atoms/IncrementProductQuantity";
import { RemoveButton } from "@/ui/atoms/RemoveButton";

export default async function Page() {
	const cart = await getCartByCookieId();

	if (!cart) {
		redirect("/");
	}

	return (
		<div className="mt-10">
			<table className="table-fixed">
				<thead>
					<tr>
						<th>Product</th>
						<th className="px-4">Quantity</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					{cart.orderItems.map(
						(item) =>
							item.product && (
								<tr key={item.id}>
									<td>{item.product.name}</td>
									<td className="text-center">
										<IncrementProductQuantity quantity={item.quantity} itemId={item.id} />{" "}
									</td>
									<td>{formatPrice(item.product.price)}</td>
									<td>
										<RemoveButton productId={item.id} />
									</td>
								</tr>
							),
					)}
				</tbody>
			</table>
		</div>
	);
}
