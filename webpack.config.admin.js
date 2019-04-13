const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const mode = process.argv[process.argv.indexOf('--mode') + 1];

console.log(process.argv, mode);

const config = {
  context: path.resolve(__dirname, 'admin'),

  entry: './src/index.jsx',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'admin', 'public'),
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.js$|\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
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
    })
  ],

  resolve: {
    extensions: ['.js', '.jsx']  // for loading ".jsx" files
  },

  devServer: {
    contentBase: './admin/public',
    port: 3030,
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:5000'
    }
  },

  devtool: 'eval-source-map'  // for debugging
};

if(mode === 'production') {
  config.plugins.push(
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css'
    })
  );
  config.module.rules.push(
    {
      test: /\.scss$/,
      use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader'
      ]
    }
  );
}
else {
  config.module.rules.push(
    {
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }
  );
}

module.exports = config;