export default function Loading() {
	return (
		<div className="mx-auto max-w-md animate-pulse p-12 sm:max-w-2xl md:max-w-3xl lg:max-w-5xl">
			<div>
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
					<div className="aspect-square rounded-md  bg-slate-100">
						<div></div>
					</div>
					<div className="mt-4 sm:mx-6 sm:mt-0">
						<div className="mb-8 h-10 rounded-md bg-slate-100"></div>
						<div className="h-20 rounded-md bg-slate-100"></div>
					</div>
				</div>
			</div>
		</div>
	);
}
