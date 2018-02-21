const webpack = require('webpack'),
	path = require('path');

module.exports = {
	context: __dirname,

	entry: './src/js/app.js',

	devtool: 'cheap-eval-source-map',

	resolve: {
		extensions: ['.js']
	},

	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},

	devServer: {
		publicPath: '/public/',
		historyApiFallback: true,
		https: true
	},

	module: {
		rules: [
			{
				test: /\.js?$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},

			{
				test: /\.scss?$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			}
		]
	}
};
