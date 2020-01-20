const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

new webpack.EnvironmentPlugin(['NODE_ENV', 'DEBUG']);

const apiVariables = new webpack.DefinePlugin({
  API_URL: JSON.stringify('https://bridge-api-dev.herokuapp.com'),
});

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    apiVariables,
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    new webpack.SourceMapDevToolPlugin({}),
  ],
};


module.exports = merge(baseConfig, config);