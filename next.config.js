/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		typedRoutes: true,
	},
	images: {
		remotePatterns: [
			{
				hostname: "naszsklep-api.vercel.app",
			},
		],
	},
};

module.exports = nextConfig;
