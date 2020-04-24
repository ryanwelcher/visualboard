const webpack = require( 'webpack' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = ( { mode } ) => {
	return {
		mode,
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /(node_modules|bower_components)/,
					loader: 'babel-loader',
					options: { presets: [ '@babel/env' ] },
				},
				{
					test: /\.css$/,
					exclude: /node_modules/,
					use: [
						{
							loader: 'style-loader',
						},
						{
							loader: 'css-loader',
							options: {
								importLoaders: 1,
							},
						},
						{
							loader: 'postcss-loader',
						},
					],
				},
			],
		},
		output: {
			filename: 'bundle.js',
		},
		plugins: [ new HtmlWebpackPlugin( { template: './src/template.html' } ), new webpack.ProgressPlugin() ],
	};
};
