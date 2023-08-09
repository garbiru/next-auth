import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				lateef: ["Lateef", "serif"],
			},
			backgroundImage: {
				"login-gradient": "url('/login-bg.png')",
			},
		},
	},
	plugins: [],
};
export default config;
