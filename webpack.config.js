const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

new webpack.EnvironmentPlugin(['NODE_ENV', 'DEBUG']);

const apiVariables = new webpack.DefinePlugin({
  // API_URL: JSON.stringify('http://localhost:8000'),
  API_URL: JSON.stringify('https://bridge-api-dev.herokuapp.com/'),
});

module.exports = {
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
