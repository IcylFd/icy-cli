const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const base = require('./webpack.base');
const ROOT_PATH = path.resolve(__dirname, '../');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');

// dev import dll to faster build

module.exports = merge(base, {
  entry: [ROOT_PATH + '/src/index.js', 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000'],

  devtool: '#source-map',
  module: {
    rules: [
      // dev 环境不需要抽离 css。for 加快编译速度，以及 css 热更新
      {
        test: /\.less$/,
        use: [
          {loader:'style-loader'},
          {loader:'css-loader'},
          {
          loader: 'less-loader',
          options: {
              javascriptEnabled: true
          }
          }
          ],
       },
    ]
  },
  plugins: [
    new HtmlIncludeAssetsPlugin({
      assets: [`dll/dev/${require('../dll/dev/vendor-manifest.json').name}.js`],
      append: false //append vendor.js to html
    }),
    new HtmlWebpackPlugin({
      title: 'quick-start',
      template: './index.html',
    }),
    new webpack.DllReferencePlugin({
      context: ROOT_PATH,
      manifest: require('../dll/dev/vendor-manifest.json'),
      sourceType: 'var',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
});
