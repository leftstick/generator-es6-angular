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
            'mocha',
            'chai-sinon'
        ],
        logLevel: config.LOG_INFO,
        plugins: [
            'karma-mocha',
            'karma-chai-sinon',
            'karma-chrome-launcher'
        ],
        singleRun: true
    });
};
