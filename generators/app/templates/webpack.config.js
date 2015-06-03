'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        splash: './js/splash.js',
        index: './js/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'js'),
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: 'style!css!autoprefixer?browsers=last 5 version!'
        }, {
            test: /\.less$/,
            loader: 'style!css!autoprefixer?browsers=last 5 version!less!'
        }, {
            test: /\.js$/,
            loader: 'babel',
            exclude: /(node_modules|bower_components)/
        }, {
            test: /\.json$/,
            loader: 'json'
        },{
          test: /\.[eot|svg|ttf|woff|woff2]\w*/,
          loader: "file-loader"
        }]
    },
    resolve: {
        root: [path.resolve(__dirname, 'js/fw/lib/'), path.resolve(__dirname, 'etc/')]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.CommonsChunkPlugin('commons.js')
    ]
};
