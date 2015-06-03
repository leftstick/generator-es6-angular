/**
 * ******************************************************************************************************
 *
 *   Defines a about feature
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
        './controller/AboutController',
        './service/AboutService'
    ], function(Base,
        Routes,
        AboutController,
        AboutService) {

        var Feature = Base.extend(function() {

            this.initializer = function() {
                this.super.initializer('about');
            };

            this.constructor = function() {
                this.routes = Routes;
            };

            this.run = function() {
                this.mod.controller('AboutController', AboutController);
                this.mod.service('AboutService', AboutService);
            };

        });

        return Feature;
    });

}(define));
