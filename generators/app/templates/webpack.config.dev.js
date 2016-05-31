var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './js/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].bundle.js',
        chunkFilename: '[id].bundle.js',
        publicPath: '/'
    },
    debug: true,
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style/useable!css!postcss!'
            },
            {
                test: /\.js$/,
                loader: 'ng-annotate!babel?{"presets":["es2015"]}',
                exclude: /(node_modules)/
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png)\w*/,
                loader: 'file'
            },
            {
                test: /\.html$/,
                loader: 'html'
            }
        ]
    },
    postcss: function() {
        return [
            autoprefixer({browsers: ['last 5 versions']})
        ];
    },
    resolve: {
        root: [
            path.resolve(__dirname),
            path.resolve(__dirname, 'js/'),
            path.resolve(__dirname, 'js/fw/')
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common.bundle.js'),
        new HtmlWebpackPlugin({
            pushState: <%= answers.pushState %>,
            filename: 'index.html',
            inject: 'body',
            template: 'index.html_vm',
            favicon: 'img/favicon.ico',
            hash: false
        })
    ]
};
