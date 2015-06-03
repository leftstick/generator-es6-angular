/**
 * System config
 * define all paths, this is the main entrance of the app.
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
(function(require) {
    'use strict';

    require.config({
        baseUrl: 'js',
        paths: {
            'etc': '../etc',
            'maincss': '../css/main',
            'fw': 'fw',
            'ext': 'fw/ext',
            'init': 'fw/init',
            'config': 'fw/config',
            'service': 'fw/service',
            'features': 'features',
            'common': 'features/common',

            'ConfiguratorBase': 'fw/lib/ConfiguratorBase',
            'FeatureBase': 'fw/lib/FeatureBase',
            'InitBase': 'fw/lib/InitBase',
            'ServiceBase': 'fw/lib/ServiceBase',

            'tpl': 'bower/requirejs-tpl/tpl',
            'css': 'bower/require-css/css.min',

            'jquery': 'bower/jquery/dist/jquery.min',
            'lodash': 'bower/lodash/lodash.min',
            'extend': 'bower/extend.js/bin/extend.min',

            'angular': 'bower/angular/angular.min',
            'angular-animate': 'bower/angular-animate/angular-animate.min',
            'angular-route': 'bower/angular-route/angular-route.min',
            'angular-sanitize': 'bower/angular-sanitize/angular-sanitize.min',
            'angular-strap': 'bower/angular-strap/dist/angular-strap.min',
            'angular-strap-tpl': 'bower/angular-strap/dist/angular-strap.tpl.min',
            'angular-loading-bar': 'bower/angular-loading-bar/build/loading-bar.min',
            'angular-theme-spinner': 'bower/angular-theme-spinner/dist/angular-theme-spinner.min',
            'angular-smart-table': 'bower/angular-smart-table/dist/smart-table.min',

            'bootstrap': 'bower/bootstrap/dist/css/bootstrap.min',
            'bootstrap-additions': 'bower/bootstrap-additions/dist/bootstrap-additions.min',
            'fontawesome': 'bower/fontawesome/css/font-awesome.min',

            'noty': 'bower/noty/js/noty/packaged/jquery.noty.packaged.min',
            'animate': 'bower/animate.css/animate.min',
            'angular-motion': 'bower/angular-motion/dist/angular-motion.min',
            'splash': 'bower/splash-screen/splash.min'
        },
        shim: {
            'jquery': {
                exports: '$'
            },
            'lodash': {
                exports: '_'
            },
            'angular': {
                exports: 'angular',
                deps: ['lodash', 'jquery']
            },
            'angular-animate': {
                deps: ['angular']
            },
            'angular-route': {
                deps: ['angular']
            },
            'angular-sanitize': {
                deps: ['angular']
            },
            'angular-strap': {
                deps: ['angular']
            },
            'angular-strap-tpl': {
                deps: ['angular', 'angular-strap']
            },
            'angular-loading-bar': {
                deps: ['angular']
            },
            'angular-theme-spinner': {
                deps: ['angular']
            },
            'angular-smart-table': {
                deps: ['angular']
            }
        }

    });

    //enable splash
    require(['splash', 'css!splash'], function(splash) {
        splash.enable('circular');
    });

    define(['main'], function(App) {
        (new App()).run();
    });

}(require));
