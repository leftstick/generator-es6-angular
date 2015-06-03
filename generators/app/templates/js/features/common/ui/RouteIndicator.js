/**
 *
 *  Defines RouteIndicator service
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
(function(define) {
    'use strict';

    define(['FeatureBase', 'lodash', 'jquery'], function(Base, _, $) {

        var Feature = Base.extend(function() {

            this.initializer = function() {
                this.super.initializer('RouteIndicator');
            };

            this.constructor = function() {
                this.$body = $('body');
            };

            this.run = function() {
                var self = this;
                this.mod.run(['$rootScope', 'Routes',
                    function($rootScope, Routes) {
                        var classes = _.pluck(Routes, 'id').join(' ');
                        $rootScope.$on('$routeChangeSuccess', function(e, route) {
                            self.$body.removeClass(classes);
                            if (route && route.$$route && route.$$route.id) {
                                self.$body.addClass(route.$$route.id);
                            }
                        });
                    }
                ]);
            };

        });

        return Feature;

    });

}(define));
