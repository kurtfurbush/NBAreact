var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/public'); //build file output
var APP_DIR = path.resolve(__dirname, 'src/app'); //app codebase

var config = {
  entry: [
    'webpack-dev-server/client?http://localhost:5000',
    'webpack/hot/dev-server',
    APP_DIR + '/jsx/app.jsx'
  ],
  output: {
    path: BUILD_DIR,
    publicPath: '/src/public/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js']
  },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loaders: ['babel']
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  }
};

module.exports = config;
