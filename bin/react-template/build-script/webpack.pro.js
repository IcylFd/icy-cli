const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const base = require('./webpack.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const config = require('../config');
const ROOT_PATH = path.resolve(__dirname, '../');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(base, {
  devtool: false,
  output: {
    path: path.join(ROOT_PATH, '/public'),
    publicPath: config.assetsPublicPath || '/',
    filename: 'js/[name].[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {loader:'css-loader'},
            {
            loader: 'less-loader',
            options: {
                javascriptEnabled: true
            }
            }
            ],
        }),
      },
    ],
  },
  plugins: [
    // 生成的 html 引入 dll
    // new HtmlIncludeAssetsPlugin({
    //   assets: [`js/${require('../dll/pro/vendor-manifest.json').name}.js`],
    //   append: false,
    // }),
    // production cp 到 js 目录下
    // new CopyWebpackPlugin([
    //   {
    //     from: 'dll/pro/vender.js',
    //     to: 'js/vender.js',
    //   },
    // ]),
    new HtmlWebpackPlugin({
      title: 'quick-start',
      template: './index.html',
    }),
    // new webpack.DllReferencePlugin({
    //   context: ROOT_PATH,
    //   manifest: require(ROOT_PATH + '/dll/pro/vendor-manifest.json'),
    //   sourceType: 'var',
    // }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      parallel: true,
      output: {
        comments: false,
        beautify: false,
      },
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': "'production'"
      }
    }),
    // new BundleAnalyzerPlugin(),
  ],
});
