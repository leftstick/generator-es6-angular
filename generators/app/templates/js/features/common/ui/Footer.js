/**
 *  Defines the Footer Module.
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
(function(define) {
    'use strict';

    define(['FeatureBase', 'jquery', 'tpl!common/ui/Footer.html', 'tpl!etc/config.json'], function(Base, $, tpl, config) {

        var Feature = Base.extend(function() {

            this.initializer = function() {
                this.super.initializer('FooterModule');
            };

            this.constructor = function() {
                this.config = JSON.parse(config());
                this.$body = $('body');
            };

            this.beforeStart = function() {
                this.$body.append(tpl());
            };

            this.run = function() {
                var self = this;
                this.mod.controller('FooterCtrl', ['$scope', function($scope) {
                    $scope.config = self.config;
                }]);
            };
        });

        return Feature;

    });

})(define);
