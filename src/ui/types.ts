import { type typeToFlattenedError } from "zod";

export type ReviewFormFieldProps = {
	htmlFor: string;
	title: string;
	name: string;
	type: string;
	state:
		| {
				errors: typeToFlattenedError<
					{
						content: string;
						email: string;
						headline: string;
						name: string;
						product: {
							connect: {
								id: string;
							};
						};
						rating: number;
					},
					string
				>;
				success?: undefined;
				error?: undefined;
		  }
		| {
				errors?: undefined;
				success?: undefined;
				error?: string;
		  }
		| {
				errors?: undefined;
				success?: string;
				error?: undefined;
		  }
		| null;
};
