/**
 *  Defines the Info Modal
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';
import FeatureBase from 'lib/FeatureBase';
import angular from 'angular';
import tpl from './Info.html';

class Feature extends FeatureBase {

    constructor() {
        super('InfoModal');
    }

    infoEvent(events, $timeout, $rootScope, $templateCache) {
        $templateCache.put('infoTpl', tpl);

        events.on('info', function(opts) {
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
                    title: 'Information',
                    backdrop: 'static',
                    content: opts.content,
                    animation: 'am-fade-and-slide-top',
                    templateUrl: 'infoTpl'
                });
            }, 0);
        });
    }

    execute() {
        this.infoEvent.$inject = [
            'events',
            '$timeout',
            '$rootScope',
            '$templateCache'
        ];
        this.run(this.infoEvent);
    }
}

export default Feature;
