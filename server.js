var webpack          = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var baseConfig       = require('./webpack/base');
var config           = require('./webpack.config.js');

// config.entry.unshift( 'webpack-dev-server/client?http://' + baseConfig.host + ':' + baseConfig.port );

var compiler = webpack( config );
var server = new webpackDevServer(compiler, {
	contentBase: './',
	noInfo: false,
	hot: false,
	watchOptions: {
		aggregateTimeout: 300,
		poll: 1000
	},
	headers: {
		'Access-Control-Allow-Origin': '*'
	},
	publicPath: '//' + baseConfig.publicHost + ':' + baseConfig.publicPort + '/dist/'
});

server.listen( baseConfig.port, baseConfig.host, function(){
	console.log( 'listening on ' + baseConfig.port + '...' );
} );
