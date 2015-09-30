/**
 *  Defines the Confirm Modal
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
import FeatureBase from 'lib/FeatureBase';
import tpl from './Confirm.html';

class Feature extends FeatureBase {

    constructor() {
        super('ConfirmModal');
    }

    run() {
        this.mod.run([
            'events',
            '$timeout',
            '$rootScope',
            '$templateCache',
            function(events, $timeout, $rootScope, $templateCache) {

                $templateCache.put('confirmTpl', tpl);

                events.on('confirm', function(opts) {
                    if (!opts) {
                        return;
                    }

                    var scope = $rootScope.$new();

                    scope.confirm = function($hide) {
                        $hide();
                        if (angular.isFunction(opts.onConfirm)) {
                            opts.onConfirm();
                        }
                    };

                    events.emit('modal', {
                        scope: scope,
                        title: 'Confirm',
                        content: opts.content,
                        animation: 'am-fade-and-slide-top',
                        templateUrl: 'confirmTpl'
                    });
                });

            }
        ]);
    }
}

export default Feature;
