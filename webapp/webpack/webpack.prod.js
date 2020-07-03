const path = require('path');
const merge = require('webpack-merge')
const baseConfig = require('../webpack.common')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin")
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin')
const FileManagerWebpackPlugin = require('filemanager-webpack-plugin')

const prodConfig = {

    mode: 'production',

    devtool: false, // source-map

    plugins: [
        new CleanWebpackPlugin(),
        new UglifyJsPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html',
            inject: true,
            minify: { // 压缩HTML文件
                removeComments: true, // 移除HTML中的注释
                collapseWhitespace: true, // 删除空白符与换行符
                minifyCSS: true,// 压缩内联css
                removeAttributeQuotes: true // 去掉一些属性的引号，例如id="moo" => id=moo
            },
            chunks: ['index']
        }),
        new MiniCssExtractPlugin({
            filename: "css/[chunkhash:8].css",
            chunkFilename: "css/[chunkhash:8].css",
        }),
        new ScriptExtHtmlWebpackPlugin({
            inline: /runtime\..*\.js$/
        }),
        new webpack.DllReferencePlugin({
            manifest: path.join(__dirname, `../dll/vendor.manifest.json`)
        }),
        new AddAssetHtmlWebpackPlugin({
            filepath: path.resolve(__dirname, '../dll/*.js'),
            outputPath: '../dist/js',
            publicPath: '/js'
        }),
        new FileManagerWebpackPlugin({  // 需要在 plugins 数组里添加
            onEnd: {
                delete: [
                    path.resolve(__dirname, '../dist/ts.zip'), // 删除之前已经存在的压缩包
                ],
                archive: [
                    { source: path.resolve(__dirname, '../dist'), destination: path.resolve(__dirname, '../dist/ts.zip') },
                ]
            }
        })
    ],

    optimization: {
        runtimeChunk: true,
        splitChunks: {
            chunks: 'async', // 提取的 chunk 类型，all: 所有，async: 异步，initial: 初始
            // minSize: 30000, // 默认值，新 chunk 产生的最小限制 整数类型（以字节为单位）
            // maxSize: 0, // 默认值，新 chunk 产生的最大限制，0为无限 整数类型（以字节为单位）
            // minChunks: 1, // 默认值，新 chunk 被引用的最少次数
            // maxAsyncRequests: 5, // 默认值，按需加载的 chunk，最大数量
            // maxInitialRequests: 3, // 默认值，初始加载的 chunk，最大数量
            // name: true, // 默认值，控制 chunk 的命名
            cacheGroups: { // 配置缓存组
                vendor: {
                    name: 'vendor',
                    chunks: 'initial',
                    priority: 10, // 优先级
                    reuseExistingChunk: false, // 允许复用已经存在的代码块
                    test: /node_modules\/(.*)\.js/, // 只打包初始时依赖的第三方
                },
                common: {
                    name: 'common',
                    chunks: 'initial',
                    // test: resolve("src/components"), // 可自定义拓展你的规则
                    minChunks: 2,
                    priority: 5,
                    reuseExistingChunk: true
                }
            }
        },
        minimizer: [
            new OptimizeCssAssetsPlugin({
                cssProcessor: require('cssnano'), // 使用 cssnano 压缩器
                cssProcessorOptions: {
                    reduceIdents: false,
                    autoprefixer: false,
                    safe: true,
                    discardComments: {
                        removeAll: true
                    }
                }
            }),
            new TerserPlugin({
                cache: true,
                // parallel: true,
                terserOptions: {
                    compress: {
                        warnings: true,
                        drop_console: true,
                        drop_debugger: true,
                        pure_funcs: ['console.log'] // 在js中打包之后移除console
                    }
                },
                sourceMap: true
            }),
        ]
    }
}

module.exports = merge(baseConfig, prodConfig)
