const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const { WebpackPluginServe: Serve } = require('webpack-plugin-serve');

module.exports = merge(common, {
  entry: ['webpack-plugin-serve/client'],
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
              importLoaders: 1 
            } 
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: path.resolve(__dirname, 'postcss.config.js')
              }
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new Serve({
      host: 'localhost',
      liveReload: true,
      open: true,
      port: 8080,
      static: [path.resolve(__dirname, 'dist')]
    })
  ],
  watch: true
});