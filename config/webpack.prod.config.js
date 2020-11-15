const path = require('path');
const { merge } = require('webpack-merge');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const TerserPlugin = require('terser-webpack-plugin');
const webpackBaseConfig = require('./webpack.common.config.js');

module.exports = merge(webpackBaseConfig, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../docs'),
    publicPath: '/jpjs/',
    filename: '[name].[chunkhash].js',
  },
  optimization: {
    minimize: true,
    minimizer: [
      new OptimizeCSSAssetsPlugin(),
      // new TerserPlugin({
      //   terserOptions: {
      //     ecma: 6,
      //     compress: true,
      //     output: {
      //       comments: false,
      //       beautify: false,
      //     },
      //   },
      // }),
    ],
  },
});
