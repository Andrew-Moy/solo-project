const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './client/index.js',
  plugins: [new HtmlWebpackPlugin({
    template: path.resolve(__dirname, '/index.html'),
    filename: 'index.html'
  })],
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'build'),
      publicPath: '/'
    },
    hot: true,
    proxy: {
      '/': 'http://localhost:3000',
    //   '/signup': 'http://localhost:3000',
    //   '/createPost': 'http://localhost:3000',
      compress: true,
      port: 8080,
    },
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    clean: true
  },

  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: path.resolve(__dirname, './node_modules'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.s?css$/,
        use: [
        { loader: 'style-loader' }, 
        { loader: 'css-loader' }, 
        { loader: 'sass-loader' }]
      }
    ]
  },
//   resolve: {
//     fallback: { "querystring": require.resolve("querystring-es3") }
//  },
//  fallback: {
//   "fs": false,
//   "tls": false,
//   "net": false,
//   "path": false,
//   "zlib": false,
//   "http": false,
//   "https": false,
//   "stream": false,
//   "crypto": false,
//   "crypto-browserify": require.resolve('crypto-browserify'), //if you want to use this module also don't forget npm i crypto-browserify 
} 