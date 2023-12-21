import { useFormStatus } from "react-dom";

export const ReviewButton = () => {
	const { pending } = useFormStatus();

	return (
		<button
			type="submit"
			disabled={pending}
			className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-8 py-2 text-sm font-medium text-gray-50 hover:bg-gray-700"
		>
			{pending ? "Adding" : "Submit"} review
		</button>
	);
};
