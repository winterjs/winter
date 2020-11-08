"use strict";

const path = require("path");

module.exports = {
	entry: {
		winter: "./app/index.ts",
	},
	context: path.resolve(__dirname),
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "{name}.js",
		library: "winter",
		libraryTarget: "umd",
		libraryExport: "default"
	},
	module: {
		rules: [
			{
				test: /\.ts?$/,
				loader: "ts-loader"
			},
			{
				test: /.css$/,
				use: ["style-loader","css-loader"]
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
