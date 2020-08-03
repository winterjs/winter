"use strict";

const path = require("path");

module.exports = {
	entry: {
		winter: "./app/index.ts",
		cli: "./app/index.ts",
	},
	context: path.resolve(__dirname),
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "{name}.js",
		library: "name",
		libraryTarget: "umd"
	},
	module: {
		rules: [
			{
				test: /\.ts?$/,
				loader: "ts-loader"
			}
		]
	},
	resolve: {
		extensions: [".js", ".ts", ".json"]
	},
	devtool: "source-map",
	plugins: [
	]
};
