let path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.[contenthash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
    title: 'My App',
    template:'src/assets/index.html'     
  })
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      },
     { test: /\.styl$/,
     loader:['style-loader','css-loader',"less-loader"], // 将 Stylus 文件编译为 CSS
      },
      {
        test: /\.less$/i,
            loader:['style-loader','css-loader',"less-loader"],
          },   
      {
        test: /\.s[ac]ss$/i,
        use: [
          // 将 JS 字符串生成为 style 节点
          'style-loader',
          // 将 CSS 转化成 CommonJS 模块
          'css-loader',
          // 将 Sass 编译成 CSS
          {
            loader:"sass-loader",
            options:{implementation: require("dart-sass")}
          },
        ],
      },
    ],
  },
  
  
};