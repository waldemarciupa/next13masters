import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// eslint-disable-next-line import/no-default-export
export default defineConfig({
	plugins: [react()],
	test: {
		environment: "jsdom",
	},
});
