import NextImage from "next/image";

export const ProductItemsImages = ({
	src,
	alt,
	width,
	height,
}: {
	src: string;
	alt: string;
	width: number;
	height: number;
}) => {
	return (
		<div className="aspect-square overflow-hidden rounded-lg border bg-slate-50 brightness-90 hover:brightness-100">
			<NextImage
				width={width}
				height={height}
				alt={alt}
				src={src}
				className="h-full w-full object-cover object-center p-3 transition-transform duration-300 ease-in-out hover:scale-105"
			/>
		</div>
	);
};
