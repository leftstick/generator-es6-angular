/**
 *  Defines the Modal
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
(function(define) {
    'use strict';

    define(['FeatureBase', 'lodash'], function(Base, _) {

        var defaults = {
            animation: 'am-fade',
            backdropAnimation: 'am-fade',
            placement: 'top',
            title: '',
            content: '',
            html: false,
            backdrop: true,
            keyboard: true,
            show: true,
            container: false,
            contentTemplate: false,
            prefixEvent: 'modal',
            id: ''
        };

        var Feature = Base.extend(function() {

            this.initializer = function() {
                this.super.initializer('ModalWrapper');
            };

            this.run = function() {
                this.mod.run(['events', '$modal', function(events, $modal) {

                    events.on('modal', function(opts) {
                        var options = _.defaults(opts, defaults);
                        options.title = opts.title;
                        $modal(options);
                    });

                }]);
            };

        });

        return Feature;

    });

})(define);
