var ExtractTextPlugin  = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin  = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');
var webpack = require('webpack');
var path    = require('path');
var cwd     = process.cwd();

require('es6-promise').polyfill();

var webpackConfig = {
	devtool: 'source-map',
	cache: false,
	entry: [ 'lib/shake-reload.js', 'mixin/unit.js', './index.js' ],
	output: {
		publicPath: 'http://demo.com:8080/',
		path: path.resolve( cwd, 'dist' ),
		filename: 'bundle.js'
	},
	resolve: {
		alias: {
			ui: path.resolve( cwd, 'components' ),
			css: path.resolve( cwd, 'css' ),
			image: path.resolve( cwd, 'images' ),
			scene: path.resolve( cwd, 'scenes' ),
			lib: path.resolve( cwd, 'lib' ),
			mixin: path.resolve( cwd, 'mixins' )
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
			},
			{
				test: /\.jpg|\.png/,
				exclude: /node_modules/,
				loader: 'image-loader?limit=10000&name=[path][name].[ext]?[hash:6]'
			}
		]
	},
	postcss: function(){
		return [ autoprefixer ];
	},
	plugins: [
		new ExtractTextPlugin( 'bundle.css'),
		new webpack.DefinePlugin({
			DEV: true
		}),
		new webpack.ProvidePlugin({
			riot: 'riot',
			Promise: 'lib/promise-polyfill'
		})
	]
};

module.exports = webpackConfig;
