/**
 *  Defines the Alerts
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
(function(define, global) {
    'use strict';

    define(['FeatureBase'], function(Base) {

        var TYPES = {
            alert: 'alert',
            notification: 'notification',
            warning: 'warning',
            error: 'error',
            info: 'information',
            success: 'success',
            confirm: 'confirm'
        };

        var TIMEOUTS = {
            alert: 3000,
            notification: 3000,
            warning: 3000,
            error: 5000,
            info: 3000,
            success: 3000,
            confirm: false
        };

        var LAYOUTS = {
            alert: 'topRight',
            notification: 'topRight',
            warning: 'topRight',
            error: 'topRight',
            info: 'topRight',
            success: 'topRight',
            confirm: 'center'
        };

        var ANIMATIONS_IN = {
            alert: 'bounceInRight',
            notification: 'bounceInRight',
            warning: 'bounceInLeft',
            error: 'wobble',
            info: 'bounceInRight',
            success: 'bounceInRight',
            confirm: 'fadeIn'
        };

        var ANIMATIONS_OUT = {
            alert: 'bounceOutLeft',
            notification: 'bounceOutLeft',
            warning: 'bounceOutRight',
            error: 'flipOutX',
            info: 'bounceOutLeft',
            success: 'bounceOutLeft',
            confirm: 'flipOutX'
        };

        var Feature = Base.extend(function() {

            this.initializer = function() {
                this.super.initializer('Alerts');
            };

            this.run = function() {
                this.mod.run(['events',
                    function(events) {

                        events.on('alert', function(data) {
                            global.noty({
                                layout: LAYOUTS[data.type],
                                text: data.message,
                                type: TYPES[data.type],
                                animation: {
                                    open: 'animated ' + ANIMATIONS_IN[data.type], // Animate.css class names
                                    close: 'animated ' + ANIMATIONS_OUT[data.type], // Animate.css class names
                                    easing: 'swing', // unavailable - no need
                                    speed: 500 // unavailable - no need
                                },
                                timeout: TIMEOUTS[data.type],
                                dismissQueue: true,
                                maxVisible: 6,
                                closeWith: ['click'], // ['click', 'button', 'hover', 'backdrop'] // backdrop click will close all notifications
                                callback: {
                                    onShow: data.onShow || angular.noop,
                                    afterShow: data.afterShow || angular.noop,
                                    onClose: data.onClose || angular.noop,
                                    afterClose: data.afterClose || angular.noop,
                                    onCloseClick: data.onCloseClick || angular.noop,
                                },
                                buttons: (data.type !== 'confirm') ? false : [{
                                    addClass: 'btn btn-primary',
                                    text: '确定',
                                    onClick: function($noty) {
                                        $noty.close();
                                        (data.onOkClick || angular.noop)();
                                    }
                                }, {
                                    addClass: 'btn btn-danger',
                                    text: '取消',
                                    onClick: function($noty) {
                                        $noty.close();
                                        (data.onCancelClick || angular.noop)();
                                    }
                                }]
                            });
                        });
                    }
                ]);
            };

        });

        return Feature;

    });

})(define, window);
