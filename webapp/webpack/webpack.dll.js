/* 像 React 相关基础运行环境，将这些基础模块打到一个包里，
只要这些包的包的版本没升级，以后每次打包就不需要再编译这些模块，
提高打包的速率，这里我们就可以用到 webpack.DllPlugin，然后使用 webpack.DllReferencePlugin 
将这个 dll 包关联到当前的编译中去。*/



const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {

    mode: 'production',
    entry: {
        // 还有redux 之类的也可以放进来
        vendor: ['react', 'react-dom', 'react-router-dom', 'lodash']
    },

    devtool: false,

    output: {
        filename: '[name].dll.[hash:8].js',
        path: path.join(__dirname, '../dll'),
        // 链接库输出方式 默认'var'形式赋给变量
        libraryTarget: 'var',
        // 全局变量名称 导出库将被以var的形式赋给这个全局变量 通过这个变量获取到里面模块
        library: '_dll_[name]_[hash:8]'
    },

    plugins: [
        // 每次运行时清空之前的 dll 文件
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [path.join(__dirname, '../dll/*')]
        }),
        new webpack.DllPlugin({
            // path 指定manifest文件的输出路径
            path: path.join(__dirname, '../dll/[name].manifest.json'),
            // 和library 一致，输出的manifest.json中的name值
            name: '_dll_[name]_[hash:8]'
        })
    ]
}
