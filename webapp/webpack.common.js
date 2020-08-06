const path = require('path');
const SRC_PATH = path.join(__dirname, './src');
const theme = require('./theme.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const { APP_ENV } = require('./config/env.js');

module.exports = {
    entry: {
        index: path.join(__dirname, './src/index.tsx')
    },

    output: {
        filename: 'js/[name].[hash].js',
        path: path.join(__dirname, './dist'),
        publicPath: '/'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader'],
                include: SRC_PATH
            },
            {
                test: /\.(j|t)s(x)?$/,
                include: [SRC_PATH],
                use: ['babel-loader', 'eslint-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/, // 正则匹配文件路径
                // exclude: /node_modules/,
                use: [
                    APP_ENV !== 'dev' ? MiniCssExtractPlugin.loader : 'style-loader',
                    {
                        loader: 'css-loader', // 解析 @import 和 url() 为 import/require() 方式处理
                        options: {
                            includePaths: ['./node_modules/normalize.css'],
                            importLoaders: 1 // 0 => 无 loader(默认); 1 => postcss-loader; 2 => postcss-loader, sass-loader
                        }
                    },
                    'postcss-loader'
                ]
            },
            {
                test: /\.scss$/,
                include: SRC_PATH,
                use: [
                    APP_ENV !== 'dev' ? MiniCssExtractPlugin.loader : 'style-loader',
                    'css-loader',
                    'postcss-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            includePaths: [path.join(__dirname, './src/common/styles')], // 公共样式
                            importLoaders: 1
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)(\?.*)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            //1024 == 1kb  
                            //小于10kb时打包成base64编码的图片否则单独打包成图片
                            limit: 10240,
                            name: path.join('./img/[name].[hash:7].[ext]')
                        }
                    }]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10240,
                        name: path.join('./font/[name].[hash:7].[ext]')
                    }
                }]
            },
            {
                // for ant design
                test: /\.less$/,
                include: path.resolve('./node_modules'),
                use: [
                    APP_ENV !== 'dev' ? MiniCssExtractPlugin.loader : 'style-loader',
                    'css-loader',
                    'postcss-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            importLoaders: 1,
                            javascriptEnabled: true,
                            modifyVars: theme // 全局样式设定
                        }
                    }
                ]
            },
            {
                test: /\.json$/,
                use: ['json-loader']
            }
        ]
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', 'jsx'],
        alias: {
            '@': path.resolve('./src'),
            "@ant-design/icons/lib/dist$": path.resolve('./src/icons.ts'),
            '@components': path.resolve('./src/page/components'),
            '@common': path.resolve('./src/page/common'),
            '@images': path.resolve('./src/page/static/images'),
            '@leafMap': path.resolve('./src/leaflet/leaflet.ts')
        }
    },

    performance: { // 性能提示，可以提示过大文件
        hints: "warning", // 性能提示开关 false | "error" | "warning"
        maxAssetSize: 100000, // 生成的文件最大限制 整数类型（以字节为单位）
        maxEntrypointSize: 100000, // 引入的文件最大限制 整数类型（以字节为单位）
        assetFilter: function (assetFilename) {
            // 提供资源文件名的断言函数
            return (/\.(png|jpe?g|gif|svg)(\?.*)?$/.test(assetFilename))
        }
    }

}