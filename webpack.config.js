const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      filename: 'index.html',
      template: 'public/template/index.html',
    })
  ],
  watch: true,
  devtool: 'source-map',
  module: {
    rules: [
      { test: /\.css$/i, use: ['style-loader', 'css-loader', 'postcss-loader'] },
      { test: /\.(png|svg|jpg|jpeg|gif)$/i, type: 'asset/resource', },
      { test: /\.(woff|woff2|eot|ttf|otf)$/i, type: 'asset/resource', },
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: ['babel-loader'] }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  }
}