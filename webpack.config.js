const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const baseConfig = require('./webpack.base');

const API_URL = {
  production: JSON.stringify('https://bridge-api-dev.herokuapp.com'),
  development: JSON.stringify('http://localhost:8000'),
};

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
    children: true,
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
  entry: './src/client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  plugins: [
    new webpack.DefinePlugin({
      API_URL: API_URL.production,
    }),
  ],
};


module.exports = merge(baseConfig, config);
