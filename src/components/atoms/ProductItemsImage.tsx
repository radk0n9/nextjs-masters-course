export const ProducItemsImages = ({ src, alt }: { src: string; alt: string }) => {
	return (
		<a href="#">
			<div className="aspect-square overflow-hidden rounded-lg border bg-stone-200 brightness-90 hover:brightness-100">
				<img
					width={300}
					height={300}
					alt={alt}
					src={src}
					className="h-full w-full object-cover object-center p-4 transition-transform hover:scale-105"
				/>
			</div>
		</a>
	);
};
