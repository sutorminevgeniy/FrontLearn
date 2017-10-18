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
      }
    ]
  },

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