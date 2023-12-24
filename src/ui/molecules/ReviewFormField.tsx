import { ErrorHelperText } from "../atoms/ErrorHelperText";
import { ReviewHeadline } from "../atoms/ReviewHeadline";
import { ReviewInput } from "../atoms/ReviewInput";
import { type ReviewFormFieldProps } from "../types";

export const ReviewFormField = ({ htmlFor, title, name, type, state }: ReviewFormFieldProps) => {
	return (
		<div>
			<ReviewHeadline htmlFor={htmlFor}>{title}</ReviewHeadline>
			<ReviewInput name={name} type={type} />
			<ErrorHelperText>{state?.errors && state?.errors?.fieldErrors?.email}</ErrorHelperText>
		</div>
	);
};
