/**
 *  Defines the Error Modal
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';
import FeatureBase from 'FeatureBase';
import angular from 'angular';
import tpl from './Error.html';

class Feature extends FeatureBase {

    constructor() {
        super('ErrorModal');
    }

    run() {
        this.mod.run([
            'events',
            '$timeout',
            '$rootScope',
            '$templateCache',
            function(events, $timeout, $rootScope, $templateCache) {
                $templateCache.put('errorTpl', tpl);

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
                            templateUrl: 'errorTpl'
                        });
                    }, 0);
                });

            }
        ]);
    }
}

export default Feature;
