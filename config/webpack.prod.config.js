const path = require('path');
const { merge } = require('webpack-merge');
// const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpackBaseConfig = require('./webpack.common.config.js');

module.exports = merge(
  {
    mode: 'production',
    output: {
      path: path.resolve(__dirname, '../docs'),
      publicPath: '/jpjs/',
      filename: '[name].[chunkhash].js',
    },
    // minimize: true,
    optimization: {
      minimizer: [
        // new TerserPlugin(),
        new OptimizeCSSAssetsPlugin(),
      ],
    },
  },
  webpackBaseConfig
);
