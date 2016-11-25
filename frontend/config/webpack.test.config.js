const path = require('path')
const webpack = require('webpack')
const ManifestPlugin = require('webpack-manifest-plugin')
const glob = require("glob")

module.exports = {
  entry: glob.sync("./frontend/js/*.js"),
  output: {
    path: './public/dist',
    publicPath: '/dist/',
    filename: '[name]-[hash].js'
  },
  module: {
    loaders: [
      {
        loaders: ['babel-loader'],
        exclude: /node_modules/,
        test: /\.js[x]?$/
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ManifestPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.json']
  },
  devServer: {
    contentBase: '../public/dist',
    port: 4000
  },
};
