/**
 *
 *  The stRatio.
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 **/
(function(define) {
    'use strict';

    define(['FeatureBase'], function(Base) {

        var Feature = Base.extend(function() {

            this.initializer = function() {
                this.super.initializer('StRatioModule');
            };

            this.run = function() {
                var dir = function() {
                    return {
                        restrict: 'A',
                        scope: {},
                        link: function($scope, element, attr) {
                            var ratio = +(attr.stRatio);
                            element.css('width', ratio + '%');
                        }
                    };
                };

                this.mod.directive('stRatio', [dir]);
            };

        });

        return Feature;

    });


})(define);
