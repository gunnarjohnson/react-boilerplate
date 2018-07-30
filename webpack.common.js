const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      // {
      //   test: '',
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: '[name].[ext]',
      //         outputPath: ''
      //       }
      //     }
      //   ],
      //   exclude: /node_modules/
      // }
    ]
  },
  plugins: [
    // new FaviconsWebpackPlugin({
    //   logo: './src/assets/icons/icon.png',
    //   prefix: 'assets/icons/',
    //   title: '',
    //   icons: {
    //     android: true,
    //     appleIcon: true,
    //     appleStartup: false,
    //     coast: false,
    //     favicons: true,
    //     firefox: false,
    //     opengraph: false,
    //     twitter: false,
    //     yandex: false,
    //     windows: false
    //   }
    // }),
    new HtmlWebpackPlugin({template: './src/index.html'})  
  ]
};