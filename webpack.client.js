const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
var API_URL = {
  production: ('https://bridge-api-dev.herokuapp.com'),
  development: JSON.stringify('http://localhost:8000'),
}
var environment = process.env.NODE_ENV === 'production' ? 'production' : 'development'
console.log(environment)


const config = {
  mode: 'development',
  // Tell webpack to root file of our server app
  entry: './src/client/index.js',

  // Tell webpack where to put output file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'API_URL': API_URL[environment]
  }),
    // apiVariables,
    // new HtmlWebPackPlugin({
    //   template: './src/index.html',
    //   filename: './index.html',
    // }),
    new webpack.SourceMapDevToolPlugin({}),
  ]
};

module.exports = merge(baseConfig, config);