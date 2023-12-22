export const ReviewHeadline = ({
	htmlFor,
	children,
}: {
	htmlFor: string;
	children: React.ReactNode;
}) => {
	return (
		<label htmlFor={htmlFor} className="text-xs text-gray-700">
			{children}
		</label>
	);
};
