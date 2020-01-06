const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.config.js');


const apiDevVariables = new webpack.DefinePlugin({
  API_URL: JSON.stringify('https://api-dev.plushcare.com'),
});


module.exports = common.map((item) => {
  const file = item;
  if (file.name) {
    file.plugins[0] = apiDevVariables;
  }
});