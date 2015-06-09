/**
 * angular-theme-spinner give a handy loading indicator
 *
 * @author Howard.Zuo
 * @date   Mar 25th, 2015
 * @version 1.1.0
 *
 **/
(function(angular, global) {
    'use strict';

    var definition = function() {

        var sizes = ['size-sm', 'size-md', 'size-lg'];
        var themes = ['tailing', 'audio-wave', 'windcatcher', 'spinner-section', 'spinner-section-far', 'circular', 'initspin'];


        var dir = function($timeout) {
            return {
                restrict: 'AE',
                scope: {
                    theme: '=',
                    display: '=',
                    size: '='
                },
                link: function($scope, element) {
                    var $parent = element.parent();
                    $scope.curTheme = undefined;
                    $scope.curSize = undefined;

                    var prepareClass = function() {
                        $scope.thClasses = [$scope.curTheme, $scope.curSize];
                    };

                    $scope.$watch('display', function(newValue) {
                        var children = element.children();
                        if(children.length === 0){
                            return;
                        }
                        var $spinner = angular.element(children[0]);
                        if (newValue) {
                            $spinner.show();
                            element.show();
                        }else{
                            $spinner.hide();
                            element.hide();
                        }
                    });

                    $scope.$watch('size', function(newValue) {
                        if (sizes.indexOf(newValue) > -1) {
                            $scope.curSize = newValue;
                        }else{
                            $scope.curSize = sizes[1];
                        }
                        prepareClass();
                    });

                    $scope.$watch('theme', function(newValue) {
                        if (themes.indexOf(newValue)>-1) {
                            $scope.curTheme = newValue;
                        }else{
                            $scope.curTheme = themes[0];
                        }
                        prepareClass();
                    });
                },
                template: '<div ng-if="display" class="spinner" ng-class="thClasses"><span ng-if="theme === \'tailing\'">{{ curSize !== \'size-sm\' ? \'Loading\' : \'\' }}</span><windcatcher ng-if="theme === \'windcatcher\'"><div class="blade"></div><div class="blade"></div><div class="blade"></div><div class="blade"></div><div class="blade"></div><div class="blade"></div><div class="blade"></div><div class="blade"></div></windcatcher><circular ng-if="theme === \'circular\'"><div class="spinner-layer spinner-blue"><div class="circle-clipper left"><div class="circle"></div></div><div class="gap-patch"><div class="circle"></div></div><div class="circle-clipper right"><div class="circle"></div></div></div><div class="spinner-layer spinner-red"><div class="circle-clipper left"><div class="circle"></div></div><div class="gap-patch"><div class="circle"></div></div><div class="circle-clipper right"><div class="circle"></div></div></div><div class="spinner-layer spinner-yellow"><div class="circle-clipper left"><div class="circle"></div></div><div class="gap-patch"><div class="circle"></div></div><div class="circle-clipper right"><div class="circle"></div></div></div><div class="spinner-layer spinner-green"><div class="circle-clipper left"><div class="circle"></div></div><div class="gap-patch"><div class="circle"></div></div><div class="circle-clipper right"><div class="circle"></div></div></div></circular></div>'
            };
        };

        var mod = angular.module('angular-theme-spinner', []);
        mod.directive('thSpinner', ['$timeout', dir]);

    };

    if (typeof exports === 'object') {
        module.exports = definition();
    } else if (typeof define === 'function' && define.amd) {
        define([], definition);
    } else {
        definition();
    }

}(angular, window));
