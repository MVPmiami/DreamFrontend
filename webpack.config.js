const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HTMLWebpackPligin = require('html-webpack-plugin');
const { Template } = require('webpack');

module.exports = {
  mode: 'development',
  entry: ["@babel/polyfill", './src/index.jsx'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    open: true,
    port: 9000,
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HTMLWebpackPligin({template: './src/index.html'}),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpg|jpeg|png|svg)/,
        use: ['file-loader']
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
        loader: "babel-loader",
        options: {
        presets: ['@babel/preset-env']
            }
          }
      },
      {
        test: /\.m?jsx$/,
        exclude: /node_modules/,
        use: {
        loader: "babel-loader",
        options: {
                presets: ["@babel/preset-react", '@babel/preset-env']
                }
        }
      }
    ]
  }
}