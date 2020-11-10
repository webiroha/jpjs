const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const GoogleFontsPlugin = require('google-fonts-webpack-plugin');

module.exports = {
  mode: 'none',
  entry: {
    top: './src/app/index.js',
    preparation: './src/app/intro/preparation/index.js',
    characters: './src/app/intro/characters/index.js',
    vowels: './src/app/intro/vowels/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: '[name].[chunkhash].js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Japanese JavaScript',
      description:
        'Play with Japanese & JavaScript. This place will be not only a personal JavaScript playground but also a combined place for someone to be able to learn Japanese a little.',
      filename: 'index.html',
      template: './src/template/index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: false,
      },
      chunks: ['top'],
    }),
    new HtmlWebpackPlugin({
      title: 'Japanese JavaScript | Preparation',
      description:
        'This page introduces how to change keyboard settings for typing Japanese.',
      filename: 'intro/preparation/index.html',
      template: './src/template/index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: false,
      },
      chunks: ['preparation'],
    }),
    new HtmlWebpackPlugin({
      title: 'Japanese JavaScript | Characters',
      description: 'There are three kind of characters in Japanese.',
      filename: 'intro/characters/index.html',
      template: './src/template/index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: false,
      },
      chunks: ['characters'],
    }),
    new HtmlWebpackPlugin({
      title: 'Japanese JavaScript | Vowels',
      description: 'Japanese has 5 vowels.',
      filename: 'intro/vowels/index.html',
      template: './src/template/index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: false,
      },
      chunks: ['vowels'],
    }),
    new MiniCssExtractPlugin({
      filename: 'style.[chunkhash].css',
    }),
  ],
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'docs'),
    compress: true,
    port: 9000,
  },
  resolve: { extensions: ['.js'] },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/images',
            },
          },
        ],
      },
      {
        test: /\.(wav)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/sounds/single',
            },
          },
        ],
      },
    ],
  },
};
