var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: __dirname,
  entry: {
    'main': './main.js',
    'pdf.worker': './node_modules/pdfjs-dist/build/pdf.worker.entry'
  },
  output: {
    path: path.join(__dirname, 'dist/'),
    publicPath: './dist/',
    filename: '[name].bundle.js'
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false
      }
    })
  ]
};