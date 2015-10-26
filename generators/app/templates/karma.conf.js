'use strict';

module.exports = function(config) {
    config.set({
        autoWatch: false,
        basePath: __dirname,
        browsers: [
            'Chrome'
        ],
        files: [
            'test/test.bundle.js'
        ],
        frameworks: [
            'mocha'
        ],
        logLevel: config.LOG_INFO,
        plugins: [
            'karma-mocha',
            'karma-chrome-launcher'
        ],
        singleRun: true
    });
};
