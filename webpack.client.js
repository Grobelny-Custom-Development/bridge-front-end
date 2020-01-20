const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const apiVariables = new webpack.DefinePlugin({
  API_URL: JSON.stringify('http://localhost:8000'),
  // API_URL: JSON.stringify('https://bridge-api-dev.herokuapp.com'),
});
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
    apiVariables,
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    new webpack.SourceMapDevToolPlugin({}),
  ]
};

module.exports = merge(baseConfig, config);