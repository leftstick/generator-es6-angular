/**
 *  Defines the Error Modal
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
(function(define) {
    'use strict';

    define(['FeatureBase', 'angular', 'tpl!./Error.html'], function(Base, angular, tpl) {

        var Feature = Base.extend(function() {

            this.initializer = function() {
                this.super.initializer('ErrorModal');
            };

            this.run = function() {
                this.mod.run(['events', '$timeout', '$rootScope', '$templateCache', function(events, $timeout, $rootScope, $templateCache) {
                    $templateCache.put('errorTpl', tpl());

                    events.on('error', function(opts) {
                        if (!opts) {
                            return;
                        }

                        var scope = $rootScope.$new();

                        scope.close = function($hide) {
                            $hide();
                            if (angular.isFunction(opts.onClose)) {
                                opts.onClose();
                            }
                        };

                        $timeout(function() {
                            events.emit('modal', {
                                scope: scope,
                                title: 'Exception',
                                backdrop: 'static',
                                content: opts.content,
                                animation: 'am-fade-and-slide-top',
                                template: 'errorTpl'
                            });
                        }, 0);
                    });

                }]);
            };

        });

        return Feature;

    });

})(define);
