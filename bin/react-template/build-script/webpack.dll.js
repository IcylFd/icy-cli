const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname, '../');
const isProd = process.env.NODE_ENV === 'production';
const publicPath = isProd ? path.join(ROOT_PATH, 'dll/pro') : path.join(ROOT_PATH, 'dll/dev');

const plugins = [
  new webpack.DllPlugin({
    path: path.join(publicPath, '[name]-manifest.json'),
    name: '[name]',
  }),
  new ExtractTextPlugin('[name].css'),
  new webpack.HashedModuleIdsPlugin(),
];

if (isProd) {
  plugins.push(...[
    new webpack.optimize.UglifyJsPlugin({
      output: {
        beautify: false,
        comments: false,
      },
      compressor: {
        warnings: false,
      },
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
    }),
  ]);
}

module.exports = {
  entry: {
    vendor: [
      'react',
      'react-dom',
    ],
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: publicPath,
    library: '[name]',
    publicPath: '/',
  },
  module: {
    rules: [{
      test: /\.less$/,
      use: ExtractTextPlugin.extract({
        use: [
          { loader: 'css-loader' },
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true,
            },
          },
        ],
      }),
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins,
};
