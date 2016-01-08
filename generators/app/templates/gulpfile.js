'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var del = require('del');

gulp.task('clean', function() {
    return del(['./build/**/*']);;
});

gulp.task('copy', ['clean'], function() {
    return gulp.src(['img/*', 'mock/*'], {'base': '.'})
        .pipe(gulp.dest('build/'));
});

gulp.task('release', ['copy'], function(callback) {
    var path = require('path');
    var replace = require('gulp-replace');
    var config = require('./webpack.config.prod');

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
    var config = require('./webpack.config.dev');

    new WebpackDevServer(webpack(config), {
        historyApiFallback: true,
        publicPath: '/js/'
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

gulp.task('test', function(callback) {
    var resolve = require('path').resolve;
    var config = require('./webpack.config.test');
    var karma = require('karma');
    var Server = karma.Server;

    var compiler = webpack(config);
    compiler.run(function(err, stats) {
        if (err) {
            gutil.log('webpack', err);
            return;
        }
        Server.start({
            configFile: resolve(__dirname, 'karma.conf.js')
        }, function(exitCode) {
            gutil.log('Karma has exited with ' + exitCode);
            process.exit(exitCode);
        });
    });

});
