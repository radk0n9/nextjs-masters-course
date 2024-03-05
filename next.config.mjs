/** @type {import('next').NextConfig} */
const nextConfig = {
	//output: "standalone",
	experimental: {
		typedRoutes: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "static-ourstore.hyperfunctor.com",
				port: "",
			},
		],
	},
	redirects: async () => {
		return [
			{
				source: "/categories/:category",
				destination: "/categories/:category/1",
				permanent: false,
			},
			{
				source: "/products",
				destination: "/products/1",
				permanent: false,
			},
		];
	},
};

export default nextConfig;
