const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

new webpack.EnvironmentPlugin(['NODE_ENV', 'DEBUG']);

// TODO:: get this working properly
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
  entry: './src/client/index.js',
  plugins: [
    apiVariables
  ],
};


module.exports = merge(baseConfig, config);