module.exports = {
	extends: ["stylelint-config-recess-order"],
	rules: {
		"selector-pseudo-element-colon-notation": "double",
	},
	ignoreFiles: ["**/node_modules/**"],
	overrides: [
		{
			files: ["**/*.{js,jsx,ts,tsx}"],
			customSyntax: "@stylelint/postcss-css-in-js", // jsファイル内のcssをパースするために使用
			rules: {
				"function-name-case": null, // camelcaseの関数を誤変換してしまうのでオフ
				"value-keyword-case": null, // camelcaseのプロパティを誤変換してしまうのでオフ
			},
		},
	],
};
