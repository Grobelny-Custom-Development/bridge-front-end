const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

new webpack.EnvironmentPlugin(['NODE_ENV', 'DEBUG']);
console.log(process.env.NODE_ENV)
const apiVariables = new webpack.DefinePlugin({
  API_URL: JSON.stringify('https://bridge-api-dev.herokuapp.com/'),
});


module.exports = {
  entry: './server/index.js',

  target: 'node',

  externals: [nodeExternals()],

  output: {
    path: path.resolve('server-build'),
    filename: 'index.js',
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    apiVariables,
  ],

};

/*
the use of target: 'node' and externals: [nodeExternals()]
form webpack-node-externals, which will omit the files from node_modules
in the bundle
*/
