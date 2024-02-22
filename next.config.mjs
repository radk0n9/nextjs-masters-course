/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		typedRoutes: true,
	},
	redirects: async () => {
		return [
			{
				source: "/categories/:category",
				destination: "/categories/:category/1",
				permanent: false,
			},
		];
	},
};

export default nextConfig;
