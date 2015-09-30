var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        index: './js/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'build', 'js'),
        filename: '[hash].[name].bundle.js',
        chunkFilename: '[hash].[id].bundle.js',
        publicPath: 'js/'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style!css!autoprefixer?browsers=last 5 version!'
            },
            {
                test: /\.less$/,
                loader: 'style!css!autoprefixer?browsers=last 5 version!less!'
            },
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)\w*/,
                loader: 'file'
            },
            {
                test: /\.html$/,
                loader: 'raw'
            }
        ]
    },
    resolve: {
        root: [
            path.resolve(__dirname),
            path.resolve(__dirname, 'js/'),
            path.resolve(__dirname, 'js/fw/'),
            path.resolve(__dirname, 'etc/')
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.CommonsChunkPlugin('[hash].common.bundle.js')
    ]
};
