import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
	publicRoutes: [
		"/",
		"/search",
		"/cart",
		"/products",
		"/products/(.*)",
		"/product/(.*)",
		"/categories/",
		"/categories/(.*)",
		"/collections/",
		"/collections/(.*)",
		"/cart/success",
	],
});

export const config = {
	matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
