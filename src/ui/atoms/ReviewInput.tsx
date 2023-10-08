export const ReviewInput = ({ name, type }: { name: string; type: string }) => {
	if (type === "textarea") {
		return (
			<textarea
				// required
				name={name}
				className="border-grey-300 focus-ring-opacity-50 mt-1 w-full rounded-md border p-2 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-200"
			/>
		);
	}
	return (
		<input
			// required
			type={type}
			name={name}
			className="border-grey-300 focus-ring-opacity-50 mt-1 w-full rounded-md border p-2 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-200"
		/>
	);
};
