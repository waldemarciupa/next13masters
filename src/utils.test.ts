import { describe, it, expect } from "vitest";
import { formatPrice } from "./utils";

describe("formatPrice", () => {
	it("should format price correctly", () => {
		expect(formatPrice(100)).toBe("$100.00");
		expect(formatPrice(1000)).toBe("$1,000.00");
		expect(formatPrice(10000)).toBe("$10,000.00");
	});
});
