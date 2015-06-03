/**
 *  Defines the TopNavbar Module.
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
(function(define) {
    'use strict';

    define(['FeatureBase', 'jquery', 'tpl!./TopNavbar.html', 'tpl!./Aside.html'], function(Base, $, tpl, asideTpl) {

        var Feature = Base.extend(function() {

            this.initializer = function() {
                this.super.initializer('TopnavModule');
            };

            this.constructor = function() {
                this.$body = $('body');
            };

            this.beforeStart = function() {
                this.$body.prepend(tpl());
            };

            this.run = function() {
                this.mod.run(['$templateCache', function($templateCache) {
                    $templateCache.put('aside', asideTpl());
                }]);
                this.mod.controller('HeaderCtrl', [function() {}]);
            };
        });

        return Feature;
    });

})(define);
