var path = require("path");
var nodeExternals = require("webpack-node-externals");

module.exports = {
	entry: "./src/server/index.js",
	target: "node",
	externals: [nodeExternals()],
	output: {
		path: path.resolve(__dirname, "server-build"),
		filename: "server-bundle.js",
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: ["ts-loader"],
				exclude:/node_modules/
			},
			{
				test: /\.jsx?/,
				use: ["babel-loader"],
				exclude:/node_modules/
			},
			{
				test: /\.scss$/,
				use: ["css-loader", "sass-loader"],
			},
			{
				test: /\.(jpe?g|gif|png|svg)$/i,
				use: [{ loader: "file-loader", options: { limit: 8192 } }],
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
};
