var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');

config.entry.unshift( 'webpack-dev-server/client?http://' + 'localhost' + ':' + '8080' );

var compiler = webpack( config );
var server = new webpackDevServer(compiler, {
	contentBase: './',
	noInfo: true,
	hot: false,
	watchOptions: {
		aggregateTimeout: 300,
		poll: 1000
	},
	headers: {
		'Access-Control-Allow-Origin': '*'
	},
	publicPath: 'http://cdn.example.com/build'
});

server.listen( 8080, 'localhost', function(){
	console.log( 'listening on 8080...' );
} );