const webpack = require('webpack');
const DashboardPlugin = require('webpack-dashboard/plugin');
const path = require('path');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./base.config');

module.exports = () => webpackMerge(baseConfig(), {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './app.jsx',
  ],
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    publicPath: '/',
    historyApiFallback: true,
    contentBase: [path.join(__dirname, '../src/')],
  },
  module: {
    rules: [
      {
        test: /\.(svg|jpg|jpeg)$/,
        use: 'file-loader?name=[name].[ext]&publicPath=../src/assets/',
      },
    ],
  },
  plugins: [
    new DashboardPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
});
