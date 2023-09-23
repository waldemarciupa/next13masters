/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		typedRoutes: true,
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
