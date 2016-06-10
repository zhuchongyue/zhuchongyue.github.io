
var HtmlWebpackPlugin = require('html-webpack-plugin');

var CopyWebpackPlugin = require('copy-webpack-plugin');

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
		}),
		new CopyWebpackPlugin(
			[
			  { from: 'mock/**/*', to : './'},
			  { from: 'resource/**/*', to : './'}
			]
			)
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
			},
			{
				test: /^mock\/(.*)\.json$/,
				loader: 'file'
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