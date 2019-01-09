const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  context: path.resolve(__dirname, 'admin'),

  entry: './src/index.jsx',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'admin', 'public')
  },

  module: {
    rules: [
      {
        test: /\.js$|\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', 
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.woff2?$|\.ttf$|\.eot$/,
        loader: 'file-loader',
        options: {
            name: 'font/[name].[ext]'
        }
      },
      {
        test: /\.svg$|\.png$|\.jpe?g$|\.gif$/,
        loader: 'file-loader',
        options: {
            name: 'images/[name].[ext]'
        }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css',
    })
  ],

  resolve: {
    extensions: ['.js', '.jsx']  // for loading ".jsx" files
  },

  devServer: {
    contentBase: './admin/public',
    port: 3030,
    proxy: {
      '/api': 'http://localhost:5000'
    }
  },

  devtool: 'eval-source-map'  // for debugging
};
