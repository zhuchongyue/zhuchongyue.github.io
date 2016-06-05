
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

	entry: './src/main.js',

	output: {
		path: '../',
		publicPath: '',
		filename: 'dist/[name].build.js',
		chunkFilename: 'dist/[id].[name].build.js'
	},

	devtool: "#source-map",

	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			inject: 'body'
		})
	],

	module: {
		loaders: [
			{
				test: /\.vue$/,
				loader: 'vue'
			},
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/
			},
			{
				test: /\.(png|jpg|gif)$/,
				loader: 'url',
				query: {
					limit: 10000,
					name: '[name].[ext]?[hash]'
				}
			}
		]
	},
	//vue-loader config
	vue: {
		loaders: {
			js: 'babel',
			css: 'sass'
		}
	}
}