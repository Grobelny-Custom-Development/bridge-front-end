const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

new webpack.EnvironmentPlugin(['NODE_ENV', 'DEBUG']);

const apiVariables = new webpack.DefinePlugin({
  API_URL: JSON.stringify('https://bridge-api-dev.herokuapp.com'),
});

const config = {
  mode: 'production',
  stats: {
    colors: false,
    hash: true,
    timings: true,
    assets: true,
    chunks: true,
    chunkModules: true,
    modules: true,
    children: true
  },
  optimization: {
    minimizer: [
      // we specify a custom UglifyJsPlugin here to get source maps in production
      new UglifyJSPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: false,
          ecma: 6,
          mangle: true
        },
        sourceMap: false
      })
    ]
  },
  entry: './src/client/index.js',
  plugins: [
    apiVariables
  ],
};


module.exports = merge(baseConfig, config);