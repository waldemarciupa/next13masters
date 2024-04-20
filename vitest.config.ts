import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// eslint-disable-next-line import/no-default-export
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@": "/src",
		},
	},
	test: {
		environment: "jsdom",
		includeSource: ["src/**/*.ts", "src/**/*.tsx"],
		exclude: ["tests", "node_modules", "dist", "cypress", "**/*.config.*"],
	},
});
