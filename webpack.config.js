const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: path.resolve(__dirname, 'public', 'index.html'),
  inject: true
});

module.exports = {
  entry: ['@babel/polyfill', './src/index.js'],
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/preset-env'] }
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|svg|jpg|gif|ttf|woff|woff2|eot)$/,
        use: ['file-loader']
      }
    ]
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 9009,
    publicPath: '/',
    historyApiFallback: true,
    hotOnly: true,
    open: false
  },
  plugins: [
    htmlWebpackPlugin,
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ManifestPlugin()
  ]
};
