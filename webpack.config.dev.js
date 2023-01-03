import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: {
    main: './src/sample/index.js',
    test: './src/practice/test/test.js',
  },
  output: {
    path: path.resolve(__dirname, 'src'), // expressの公開フォルダ
    publicPath: '/',
    filename: '[name].[chunkhash].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/sample/index.html',
      chunks: ['main'],
    }),
    new HtmlWebpackPlugin({
      filename: 'test.html',
      template: 'src/practice/test/test.html',
      chunks: ['test'],
    }),
  ],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: ['babel-loader'] },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
    ],
  },
};
