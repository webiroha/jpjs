const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const GoogleFontsPlugin = require('google-fonts-webpack-plugin');

const pageMetas = {
  top: {
    title: 'Japanese JavaScript',
    description:
      'Play with Japanese & JavaScript. This place will be not only a personal JavaScript playground but also a combined place for someone to be able to learn Japanese a little.',
  },

  preparation: {
    title: 'Japanese JavaScript | Preparation',
    description:
      'This page introduces how to change keyboard settings for typing Japanese.',
  },

  characters: {
    title: 'Japanese JavaScript | Characters',
    description: 'There are three kind of characters in Japanese.',
  },

  vowels: {
    title: 'Japanese JavaScript | Vowels',
    description: 'Japanese has 5 vowels.',
  },

  consonants: {
    title: 'Japanese JavaScript | Consonants',
    description: 'Around 14 - 17 consonant elements are used by Romaji.',
  },

  kvowels: {
    title: 'Japanese JavaScript | Consonant vowel K',
    description: "Let's try to learn consonant k + vowel sound!",
  },
};

const webpackConfig = {
  entry: {
    top: './src/app/index.js',
    preparation: './src/app/intro/preparation/index.js',
    characters: './src/app/intro/characters/index.js',
    vowels: './src/app/intro/vowels/index.js',
    consonants: './src/app/intro/consonants/index.js',
    kvowels: './src/app/intro/consonants/kvowels/index.js',
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
      // {
      //   test: /\.(png|jpg|gif|svg)$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: '[name].[ext]',
      //         outputPath: 'assets/images/',
      //       },
      //     },
      //   ],
      // },
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
  resolve: {
    alias: {
      '@root': path.resolve(__dirname, '../src/app/'),
      '@wav': path.resolve(__dirname, '../src/assets/sounds/single'),
    },
    modules: ['node_modules', path.resolve(__dirname, '../src')],
    extensions: ['.js', '.ts'],
  },

  plugins: [
    new HtmlWebpackPlugin(),
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

const filepath = (key) => {
  if (key === 'top') return 'index.html';
  if (key !== 'vowels' && key.endsWith('vowels'))
    return `intro/consonants/${key}/index.html`;

  return `intro/${key}/index.html`;
};

Object.keys(webpackConfig.entry).forEach((key) => {
  webpackConfig.plugins.push(
    new HtmlWebpackPlugin({
      title: pageMetas[key].title,
      description: pageMetas[key].description,
      filename: filepath(key),
      template: './src/template/index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: false,
      },
      chunks: [key],
    })
  );
});

module.exports = webpackConfig;
