import Image from "next/image";

export const CollectionCoverImage = ({ src, alt }: { src: string; alt: string }) => {
	return (
		<div className="aspect-auto overflow-hidden rounded-md border bg-slate-50 hover:bg-slate-100">
			<Image
				width={320}
				height={320}
				alt={alt}
				src={src}
				className="h-full w-full object-cover object-center transition-transform hover:scale-105"
			/>
		</div>
	);
};
