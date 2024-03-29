import type { Config } from "jest";

const config: Config = {
	verbose: true,
	setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
	testEnvironment: "jest-environment-jsdom",
};

export default config;
