var ExtractTextPlugin  = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin  = require('html-webpack-plugin');
var path = require('path');
var webpack = require('webpack');
var cwd = process.cwd();

require('es6-promise').polyfill();

module.exports = {
	devtool: 'source-map',
	cache: false,
	entry: [ './index.js' ],
	output: {
		path: path.resolve( cwd, 'dist' ),
		filename: 'bundle.js'
	},
	resolve: {
		alias: {
			ui: path.resolve( cwd, 'components' ),
			css: path.resolve( cwd, 'css' ),
			image: path.resolve( cwd, 'images' ),
			scene: path.resolve( cwd, 'scenes' ),
			lib: path.resolve( cwd, 'lib' )
		},
		extensions: [
			'', '.js', '.tag', '.css'
		]
	},
	module: {
		preLoaders: [
			{
				test: /\.tag$/,
				exclude: /node_modules/,
				loader: 'riotjs-loader',
				query: { type: 'none' }
			}
		],
		loaders: [
			{
				test: /\.css$/,
				exclude: /node_modules/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader?localIdentName=[name]_[local]_[hash:base64:5]!postcss-loader')
			}
		]
	},
	plugins: [
		new ExtractTextPlugin( 'bundle.css'),
		new webpack.ProvidePlugin({
			riot: 'riot',
			Promise: 'lib/promise-polyfill'
		})
	]
};