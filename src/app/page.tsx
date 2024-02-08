import { ProductList } from "@/components/oragnism /ProductList";
import { type ProductItemType } from "@/components/type";

const products: ProductItemType[] = [
	{
		id: "1",
		name: "Earthen Bottle",
		category: "Items",
		price: 4800,
		itemImage: {
			alt: "Tall slender",
			src: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
		},
	},
	{
		id: "2",
		name: "Nomad Tumbler",
		category: "Items",
		price: 3500,
		itemImage: {
			alt: "Olive drab green",
			src: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
		},
	},
	{
		id: "3",
		name: "Focus Paper Refill",
		category: "Items",
		price: 8900,
		itemImage: {
			alt: "Person using a pen",
			src: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
		},
	},
	{
		id: "4",
		name: "Machined Mechanical Pencil",
		category: "Items",
		price: 3500,
		itemImage: {
			alt: "Hand holding black",
			src: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
		},
	},
];

export default function Home() {
	return (
		<section className="mx-auto max-w-md rounded-md bg-zinc-900 p-14 sm:max-w-2xl sm:py-16 md:max-w-6xl lg:max-w-7xl">
			<h2 className="sr-only">Products</h2>
			<ProductList products={products} />
		</section>
	);
}
