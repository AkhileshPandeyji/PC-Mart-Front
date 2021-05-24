var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var CopyPlugin = require("copy-webpack-plugin");
var { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
	mode: "development",
	entry: {
		index: "./src/index.tsx",
	},
	output: {
		path: path.resolve(__dirname, "client-dev-build"),
		filename: "[name].js",
		chunkFilename: "[id].js",
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			{
				test: /\.tsx?$/,
				use: ["ts-loader"],
				exclude: /node_modules/,
			},
			{
				test: /\.(js|jsx)$/,
				use: ["babel-loader"],
				exclude: /node_modules/,
			},
			{
				test: /\.(jpe?g|gif|png|svg)$/i,
				use: [{ loader: "url-loader", options: { limit: 8192 } }],
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: "./src/template.html",
			filename: "index.html",
			inject: "body",
		}),
		new CopyPlugin({
			patterns: [{ from: "template.html", to: "./", context: "./src" }],
		}),
	],
};
