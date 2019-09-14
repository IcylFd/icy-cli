const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = require('../config');

const ROOT_PATH = path.resolve(__dirname, '../');

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [path.resolve('src'), path.resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter'),
          emitWarning: true,
        },
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [path.resolve('src'), path.resolve('node_modules/for-editor/dist/index.js')],
      },
      {
        test: /(\.css$)/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|svg|gif|jpeg|woff|eot|ttf|svg|ico)$/,
        loader: 'file-loader',
        options: {
          name: 'static/[name].[hash].[ext]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      antd: path.resolve(__dirname, '../node_modules/antd'),
      Components: path.resolve('src/components'),
    },
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new ExtractTextPlugin('css/[name].[chunkhash].css'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
      },
    }),
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom',
    }),
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /ja|zh-cn|en|es|pt/),
  ],
};
