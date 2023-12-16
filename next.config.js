/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		typedRoutes: true,
		workerThreads: false,
		cpus: 1,
	},
	redirects: async () => {
		return [
			{
				source: "/products",
				destination: "/products/1",
				permanent: false,
			},
			{
				source: "/categories/t-shirts",
				destination: "/categories/t-shirts/1",
				permanent: false,
			},
			{
				source: "/categories/hoodies",
				destination: "/categories/hoodies/1",
				permanent: false,
			},
			{
				source: "/categories/accessories",
				destination: "/categories/accessories/1",
				permanent: false,
			},
		];
	},

	images: {
		remotePatterns: [
			{
				hostname: "media.graphassets.com",
			},
		],
	},
};

module.exports = nextConfig;
