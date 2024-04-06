type IncrementProductQuantityButtonProps = {
	formAction: string | ((formData: FormData) => void) | undefined;
	children: React.ReactNode;
};

export const IncrementProductQuantityButton = ({
	formAction,
	children,
}: IncrementProductQuantityButtonProps) => {
	return (
		<button data-testid="decrement" className="h-6 w-6 border" formAction={formAction}>
			{children}
		</button>
	);
};
