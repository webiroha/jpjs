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
  },
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: '[name].[chunkhash].js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    // new GoogleFontsPlugin({
    //   fonts: [
    //     {
    //       family: 'Poppins',
    //       variants: [
    //         '100',
    //         '200',
    //         '300',
    //         'regular',
    //         '500',
    //         '600',
    //         '700',
    //         '800',
    //         '900',
    //       ],
    //     },
    //   ],
    //   local: true,
    //   path: './assets/fonts/google-fonts',
    //   outputDir: 'docs/assets/fonts',
    // }),
    new HtmlWebpackPlugin({
      title: 'Japanese JavaScript',
      filename: 'index.html',
      template: './src/template/index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: false,
      },
      chunks: ['top'],
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
    ],
  },
};
