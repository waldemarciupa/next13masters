import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
	return NextResponse.redirect(new URL("/products/1", request.url));
}

export const config = {
	matcher: "/products",
};
