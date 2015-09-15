/**
 *
 *  Defines `events` service which helps developer
 *  control EVENT system
 *
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';
import ServiceBase from 'lib/ServiceBase';
import _ from 'lodash';
import angular from 'angular';

class Service extends ServiceBase {
    constructor(features, app) {
        super(features, app);
    }

    run() {
        this.app.factory('events', [
            '$rootScope',
            function($rootScope) {
                var factory = {};

                var listeners = {};

                factory.emit = function(eventName, data) {
                    if (!eventName) {
                        return;
                    }
                    $rootScope.$broadcast(eventName, data);
                };

                factory.on = function(eventName, callback) {
                    if (!listeners[eventName]) {
                        listeners[eventName] = [];
                        $rootScope.$on(eventName, function(event, data) {
                            _.each(listeners[eventName], function(listener) {
                                listener(data);
                            });
                        });

                    }
                    if (angular.isFunction(callback)) {
                        listeners[eventName].push(callback);
                    }
                };

                return factory;
            }
        ]);
    }
}

export default Service;
