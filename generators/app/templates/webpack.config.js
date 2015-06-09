'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        index: './js/index.js'
    },
    output: {
        path: path.resolve(__dirname),
        filename: '[name].bundle.js'
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
        }, {
            test: /\.(eot|svg|ttf|woff|woff2)\w*/,
            loader: 'file'
        }, {
            test: /\.html$/,
            loader: 'raw'
        }]
    },
    resolve: {
        root: [path.resolve(__dirname, 'js/fw/lib/'), path.resolve(__dirname, 'etc/')]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new webpack.optimize.CommonsChunkPlugin('common.bundle.js')
    ]
};
