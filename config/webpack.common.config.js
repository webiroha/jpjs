const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const GoogleFontsPlugin = require('google-fonts-webpack-plugin');

module.exports = {
  entry: {
    top: './src/app/index.js',
    preparation: './src/app/intro/preparation/index.js',
    characters: './src/app/intro/characters/index.js',
    vowels: './src/app/intro/vowels/index.js',
  },
  output: {
    path: path.resolve(__dirname, '../docs'),
    publicPath: '/jpjs/',
    filename: '[name].[chunkhash].js',
  },

  module: {
    rules: [
      {
        test: [/.js$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: [/.css$|.scss$/],
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
              outputPath: 'assets/images/',
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
  // mode: 'development',
  // devtool: 'cheap-module-eval-source-map',
  // devServer: {
  //   open: true,
  //   contentBase: path.join(__dirname),
  //   compress: true,
  //   watchContentBase: true,
  //   port: 9000,
  // },
  resolve: {
    // alias: {
    //   '@scss': path.resolve(__dirname, '../src/styles/scss'),
    //   '@img': path.resolve(__dirname, '../src/assets/images'),
    //   '@img': path.resolve(__dirname, '../src/assets/sounds/single'),
    //   '@': path.resolve(__dirname, '../src'),
    // },
    modules: ['node_modules', path.resolve(__dirname, 'src')],
    extensions: ['.js', '.ts'],
  },

  plugins: [
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
    // new CopyWebpackPlugin([
    //   {
    //     from: './src/assets/images',
    //     to: 'assets/images',
    //   },
    // ]),
    new CleanWebpackPlugin(),
  ],
};
