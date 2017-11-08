const webpackMerge = require('webpack-merge');
const baseConfig = require('./base.config');
const path = require('path');

module.exports = () => webpackMerge(baseConfig(), {
  entry: [
    './app.jsx',
  ],
  output: {
    path: path.join(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.(svg|jpg|jpeg)$/,
        use: 'file-loader?name=[name].[ext]&outputPath=/assets/',
      },
    ],
  },
});
