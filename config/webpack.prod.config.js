const path = require('path');
const { merge } = require('webpack-merge');
const webpackBaseConfig = require('./webpack.common.config.js');

module.exports = merge(webpackBaseConfig, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../docs'),
    publicPath: '/jpjs/',
    filename: '[name].[chunkhash].js',
  },
});
