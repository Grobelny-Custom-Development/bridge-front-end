const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const apiVariables = new webpack.DefinePlugin({
  API_URL: JSON.stringify('http://localhost:8000'),
  // API_URL: JSON.stringify('https://bridge-api-dev.herokuapp.com'),
});

module.exports = {
  // Tell webpack to run babel on every file it runs through
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            '@babel/preset-react',
            ['@babel/env', { targets: { browsers: ['last 2 versions'] } }]
          ]
        }
      }
    ],
  },
};