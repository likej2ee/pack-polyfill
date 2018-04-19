var path = require('path');
var webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-source-map',
  resolve: {
    modules: [
      path.join(__dirname, './node_modules'),
    ],
  },
  entry: {
    'library': './src/library.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
};
