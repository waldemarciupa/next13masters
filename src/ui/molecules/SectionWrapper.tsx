export const SectionWrapper = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="mx-auto max-w-md p-12 sm:max-w-2xl md:max-w-3xl lg:max-w-5xl">{children}</div>
	);
};
