const path = require('path');
const { merge } = require('webpack-merge');
const webpackBaseConfig = require('./webpack.common.config.js');

module.exports = merge(webpackBaseConfig, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '../docs'),
    publicPath: '/',
    filename: '[name].[chunkhash].js',
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    open: true,
    contentBase: path.join(__dirname, '../docs'),
    compress: true,
    watchContentBase: true,
    port: 9000,
  },
});
