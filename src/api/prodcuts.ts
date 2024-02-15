import { type ProductItemType } from "@/components/type";

type ProductResponeItem = {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: {
		rate: number;
		count: number;
	};
	image: string;
	longDescription: string;
};

export const getProductsList = async () => {
	const res = await fetch("https://naszsklep-api.vercel.app/api/products?take=20");
	const productsRespone = (await res.json()) as ProductResponeItem[];
	const products = productsRespone.map(productsResponeItemToProductItemType);
	return products;
};

export const getProductsById = async (id: ProductResponeItem["id"]) => {
	const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);
	const productRespone = (await res.json()) as ProductResponeItem;
	return productsResponeItemToProductItemType(productRespone);
};

const productsResponeItemToProductItemType = (product: ProductResponeItem): ProductItemType => {
	return {
		id: product.id,
		name: product.title,
		category: product.category,
		price: product.price,
		itemImage: {
			alt: product.id,
			src: product.image,
		},
	};
};
