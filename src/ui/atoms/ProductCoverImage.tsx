import Image from "next/image";

export const ProductCoverImage = ({ src, alt }: { src: string; alt: string }) => {
	return (
		<div className="aspect-square overflow-hidden rounded-md border bg-slate-50 hover:bg-slate-100">
			<Image
				width={256}
				height={256}
				alt={alt}
				src={src}
				className="h-full w-full object-cover object-center p-4 transition-transform hover:scale-105"
				loading="lazy"
				decoding="async"
			/>
		</div>
	);
};
