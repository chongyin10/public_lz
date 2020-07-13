const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('../webpack.common')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')
const { APP_ENV, API_BASEURL, PROBASE } = require('../config/env.js');

const devConfig = {

    mode: 'development',

    devtool: 'eval-source-map',

    plugins: [
        // new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html',
            inject: true,
            chunks: ['index']
        }),
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].[hash].css",
            chunkFilename: "[id].[hash].css",
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'http_env': JSON.stringify(APP_ENV)
            }
        })
    ],

    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
        // host: 'localhost',
        port: 3000,
        inline: true,
        historyApiFallback: true,
        overlay: {
            //当出现编译器错误或警告时，就在网页上显示一层黑色的背景层和错误信息
            errors: true
        },
        hot: true,
        proxy: {
            '/api': {
                target: API_BASEURL,
                ws: true,
                changeOrigin: true,
                pathRewrite: { '^/api': '/' }
            }
        }
    },
}

module.exports = merge(baseConfig, devConfig)
