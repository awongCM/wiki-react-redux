const path = require("path")

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


//For html-webpack-plugin
const options = {
  template: './public/index.html',
  filename: 'index.html',
  inject: 'body'
};

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'bundled.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, loader:'babel-loader', exclude: /node_modules/},
      {test: /\.jsx$/, loader:'babel-loader', exclude: /node_modules/},
      {test: /\.(css|scss)$/, loader:'style-loader!css-loader!sass-loader'},
      {test: /\.(png|jpg|jpeg|gif|svg)$/, loader:'file-loader'}

    ]
  },
  plugins: [new HtmlWebpackPlugin(options), new CleanWebpackPlugin(['dist'])]
};