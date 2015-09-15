/**
 *  Defines the Alerts
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';

import FeatureBase from 'lib/FeatureBase';
import angular from 'angular';

var TYPES = {
    warning: 'warning',
    error: 'error',
    info: 'info',
    success: 'success'
};

var TIMEOUTS = {
    warning: 3000,
    error: 5000,
    info: 3000,
    success: 3000
};

var TITLES = {
    warning: 'Warning',
    error: 'Error',
    info: 'Info',
    success: 'Success'
};

class Feature extends FeatureBase {
    constructor() {
        super('Alerts');
        this.$body = angular.element(document.body);
    }

    beforeStart() {
        this.$body.append('<sweetnotifier></sweetnotifier>');
    };

    run() {
        this.mod.run([
            'events',
            'notifier',
            function(events, notifier) {

                events.on('alert', function(data) {
                    notifier.emit({
                        type: TYPES[data.type],
                        title: TITLES[data.type],
                        content: data.message,
                        timeout: TIMEOUTS[data.type]
                    });
                });
            }
        ]);
    }
}

export default Feature;
