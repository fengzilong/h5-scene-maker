var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer      = require('autoprefixer');
var webpack           = require('webpack');
var path              = require('path');
var baseConfig        = require('./webpack/base');
var cwd               = process.cwd();

require('es6-promise').polyfill();

var webpackConfig = {
	devtool: 'source-map',
	context: cwd,
	entry: {
		common: [
			'es6-promise',
			'./src/zepto.js',
			'./src/animo.js',
			'./src/riot',
			'./src/shake.js',
		],
		app: [
			'./src/animo.css',
			'./src/index.js',
		],
	},
	output: {
		publicPath: '//' + baseConfig.host + ':' + baseConfig.port + '/dist/',
		path: path.resolve( cwd, 'dist' ),
		filename: '[name].js',
		chunkFilename: '[name]-[chunkhash:8].js',
	},
	resolve: {
		alias: {
			image: path.resolve( cwd, 'src/assets/images' ),
			view: path.resolve( cwd, 'src/views' ),
			util: path.resolve( cwd, 'src/util' ),
			ui: path.resolve( cwd, 'src/components' ),
		},
		extensions: [
			'', '.js', '.tag', '.less', '.css'
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
				test: /\.(js|tag)$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.(less|css)$/,
				exclude: /node_modules/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader?localIdentName=[name]_[local]_[hash:base64:5]!postcss-loader!less-loader')
			},
			// TODO: include .js, url-loader for images in css
			{
				test: /\.(jpeg|jpg|png|gif)$/,
				exclude: /node_modules/,
				loader: 'image-loader?limit=10000&name=images/[path][name].[ext]?[hash:8]&context=' + path.resolve( cwd, 'src/assets/images' )
			}
		]
	},
	postcss: function(){
		return [ autoprefixer ];
	},
	plugins: [
		new webpack.DefinePlugin({
			__DEV__: true
		}),
		// new webpack.ProvidePlugin({}),
		new ExtractTextPlugin( 'app.css'),
	]
};

module.exports = webpackConfig;
