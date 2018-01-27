const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ["babel-polyfill", './src/index.js'],
  output: {
    filename: './public/js/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader'
        }],
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
             fallback: "style-loader",
             use: "css-loader"
           })
      }
    ]},

  plugins: [
    new ExtractTextPlugin('./public/css/bundle.css', {
      allChunks: true
    })
  ]
};
