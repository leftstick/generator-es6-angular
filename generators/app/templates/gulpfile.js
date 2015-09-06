'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');

gulp.task('release', function(callback) {
    var path = require('path');
    var replace = require('gulp-replace');
    var config = require('./webpack.config');

    config.output.filename = '[hash].[name].bundle.js';
    config.output.chunkFilename = '[hash].[id].bundle.js';
    config.plugins.pop();
    config.plugins.push(new webpack.optimize.CommonsChunkPlugin('[hash].common.bundle.js'));

    require('rimraf').sync('build/');

    config.output.path = path.resolve(__dirname, 'build');
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }));

    gulp.src([
        'etc/*',
        'img/*',
        'mock/*',
        'favicon.ico'
    ], {'base': '.'})
        .pipe(gulp.dest('build/'));

    webpack(config, function(err, stats) {
        if (err) {
            throw new gutil.PluginError('webpack', err);
        }
        gutil.log('[webpack]', stats.toString());
        gulp.src(['index.html'], {'base': '.'})
            .pipe(replace('common.bundle.js', stats.hash + '.common.bundle.js'))
            .pipe(replace('index.bundle.js', stats.hash + '.index.bundle.js'))
            .pipe(gulp.dest('build/'))
            .on('end', callback);
    });
});


gulp.task('dev', function(callback) {
    var WebpackDevServer = require('webpack-dev-server');
    var config = require('./webpack.config');
    config.devtool = 'sourcemap';
    config.debug = true;

    new WebpackDevServer(webpack(config), {
        historyApiFallback: true
    }).listen(8080, 'localhost', function(err) {
        if (err) {
            throw new gutil.PluginError('webpack-dev-server', err);
        }
        // Server listening
        gutil.log('[webpack-dev-server]', 'http://localhost:8080/webpack-dev-server/index.html');

    // keep the server alive or continue?
    // callback();
    });
});
