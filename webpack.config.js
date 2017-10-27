var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/App.jsx',

  output: {
    filename: 'bundle.js',
    path: __dirname + '/public'
  },

  module: {
    loaders: [
      {
        test: /\.js$|\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.woff2?$|\.ttf$|\.eot$/,
        loader: 'file-loader',
        query: {
            name: 'font/[name].[ext]'
        }
      },
      {
        test: /\.svg$|\.png|\.jpe?g|\.gif$/,
        loader: 'file-loader',
        query: {
            name: '/images/[name].[ext]'
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
    contentBase: './public',
    port: 3030
  },

  devtool: 'eval-source-map'  // for debugging
};

// !!! разобраться с подключением react-hot-loader