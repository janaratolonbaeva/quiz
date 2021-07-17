const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');

const isProd = process.env.NODE_ENV === 'production'
const isDev = !isProd

const filename = ext => isDev ? `bundle.${ext}` : `bundle.[hash].${ext}`

const jsLoaders = () => {
  const loaders = [
    'source-map-loader',
    {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    }
  ]

  return loaders
}


module.exports = {
  // context: path.resolve(__dirname, 'src'),
  mode: 'development',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: filename('js')
  },
  devServer: {
    compress: true,
    port: 3010,
    hot: isDev
  },
  module: {
    rules: [
      {
        test: /\.sass$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: jsLoaders()
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: filename('css')
    }),
    new WebpackNotifierPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        removeComments: isProd,
        collapseWhitespace: isProd
      }
    }),
  ]
}