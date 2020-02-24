const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const webpackNodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack.base.js');
// const apiVariables = new webpack.DefinePlugin({
//   API_URL: JSON.stringify('http://localhost:8000'),
//   // API_URL: JSON.stringify('https://bridge-api-dev.herokuapp.com'),
// });

const config = {
  // Inform webpack that we're building a bundle
  // for nodeJS, rather than for the browser
  target: 'node',

  mode: 'production',

  // Tell webpack the root file of our
  // server application
  entry: './src/server/index.js',
  // We don't serve bundle.js for server, so we can use dynamic external imports
  externals: [webpackNodeExternals()],

  // Tell webpack where to put the output file
  // that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  // plugins: [
  //   apiVariables,
  // ]
};

module.exports = merge(baseConfig, config);

/*
the use of target: 'node' and externals: [nodeExternals()]
form webpack-node-externals, which will omit the files from node_modules
in the bundle
*/
