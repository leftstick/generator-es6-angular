/**
 * ******************************************************************************************************
 *
 *   Defines a home feature
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 * ******************************************************************************************************
 */
(function(define) {
    'use strict';

    define([
        'FeatureBase',
        './Routes',
        './controller/HomeController',
        './service/HomeService',
        'tpl!./partials/custom.html'
    ], function(Base,
        Routes,
        HomeController,
        HomeService,
        customTpl) {

        var Feature = Base.extend(function() {

            this.initializer = function() {
                this.super.initializer('home');
            };

            this.constructor = function() {
                this.routes = Routes;
            };

            this.run = function() {
                this.mod.controller('HomeController', HomeController);
                this.mod.service('HomeService', HomeService);
                this.mod.run(['$templateCache', function($templateCache) {
                    $templateCache.put('customTpl', customTpl());
                }]);
            };

        });

        return Feature;

    });

}(define));
