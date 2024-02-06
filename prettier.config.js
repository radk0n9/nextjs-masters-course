module.exports = {
	semi: true, //semicolon at the end of line
	singleQuote: false, //single quote off
	trailingComma: "all", //comma always in js
	printWidth: 100, //width of terminal
	useTabs: true, //tabs instead of space
	plugins: ["prettier-plugin-tailwindcss"],
	tailwindConfig: "./tailwind.config.ts",
};
