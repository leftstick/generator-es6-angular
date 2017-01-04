const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './js/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[hash].[name].bundle.js',
        chunkFilename: '[hash].[id].bundle.js',
        publicPath: '/'
    },
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
            path.resolve(__dirname, 'js/')
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.CommonsChunkPlugin('[hash].common.bundle.js'),
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
