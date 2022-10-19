let path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const base = require('./webpack.config.base.js')
module.exports = {
  // mode: 'development',
  // plugins: [
  //   new HtmlWebpackPlugin({
  //   title: 'My App',
  //   template:'src/assets/index.html'     
  // })],
  ...base,
  devtool:'inline-source-map',
  devServer:{
    contentBase:'./dist'
  },
  module: {
    rules: [
      ...base.module.rules,
      {
        test: /\.css$/i,
        use: [
          "style-loader","css-loader"
        ]
      }
    ]
    
  }
  
};