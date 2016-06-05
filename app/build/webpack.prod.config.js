
var webpack = require('webpack');

var config = require('./webpack.base.config.js');

config.plugins = (config.plugins || []).concat([

	new webpack.DefinePlugin({
		'proccess.env': {
			NODE_ENV: '"production"'
		}
	}),

	new webpack.optimize.UglifyJsPlugin({
		compress: {
			warnings: false
		}
	}),

	new webpack.optimize.OccurenceOrderPlugin()

])

module.exports = config;