import { formatPrice } from "@/utils";

export const CartTotal = ({ total }: { total: number }) => {
	return (
		<div className="mt-8 flex items-center justify-between rounded-lg bg-gray-50 p-4 py-4">
			<div>
				<p className="text-slate-900">Order total</p>
				<p className="mt-1 text-sm text-slate-500">
					Shipping and taxes will be calculated in next step
				</p>
			</div>
			<div>
				<span className=" small-caps font-medium text-slate-900">{formatPrice(total / 100)}</span>
			</div>
		</div>
	);
};
