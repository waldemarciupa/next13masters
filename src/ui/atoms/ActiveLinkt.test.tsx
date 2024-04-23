import { cleanup, render, screen } from "@testing-library/react";
import { type Route } from "next";
import "@testing-library/jest-dom/vitest";
import { beforeEach, afterEach, describe, expect, it, vi } from "vitest";
import { ActiveLink } from "./ActiveLink";

const mockUsePathname = vi.fn();
vi.mock("next/navigation", () => ({
	// eslint-disable-next-line @typescript-eslint/no-unsafe-return
	usePathname: () => mockUsePathname(),
}));

describe("ActiveLink", () => {
	beforeEach(() => {
		mockUsePathname.mockReturnValue("/test");
	});

	afterEach(() => {
		vi.clearAllMocks();
		cleanup();
	});

	it("Renders ActiveLink", () => {
		render(<ActiveLink href={"/test" as Route}>Test</ActiveLink>);
		expect(screen.getByText("Test")).toHaveTextContent("Test");
	});

	it("Renders ActiveLink styled if link is active", () => {
		render(<ActiveLink href={"/test" as Route}>Test</ActiveLink>);
		expect(screen.getByText("Test")).toHaveClass("border-b-black");
	});

	it("Renders ActiveLink styled if link is not active", () => {
		render(<ActiveLink href={"/test2" as Route}>Test</ActiveLink>);
		expect(screen.getByText("Test")).toHaveClass("hover:text-zinc-400");
	});
});
