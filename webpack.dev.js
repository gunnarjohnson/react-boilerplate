const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    open: true,
    port: 8080,
    static: {
      directory: path.join(__dirname, 'public'),
    },
  },
});
