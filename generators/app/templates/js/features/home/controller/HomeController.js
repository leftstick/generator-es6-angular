/**
 *  Defines the HomeController controller
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
(function(define) {
    'use strict';

    /**
     * Register the HomeController class with RequireJS
     */
    define([], function() {

        /**
         * @constructor
         */
        var HomeController = function($scope, events, utils, HomeService, $alert) {

            $scope.$alert = $alert;

            var noty = function(type, msg) {
                events.emit('alert', {
                    type: type,
                    message: msg,
                    onShow: function() {
                        console.log('displaying');
                    },
                    onClose: function() {
                        console.log('closed');
                    }
                });
            };

            $scope.showSuccessNoty = function() {
                noty('success', 'This is success noty');
            };

            $scope.showErrorNoty = function() {
                noty('error', 'This is error noty');
            };

            $scope.showInfoNoty = function() {
                noty('info', 'This is info noty');
            };

            $scope.showInfo = function() {
                events.emit('info', {
                    content: 'It\'s simple info dialog',
                    onClose: function() {
                        noty('info', 'Dialog closed!');
                    }
                });
            };

            $scope.showError = function() {
                events.emit('error', {
                    content: 'It\'s error dialog',
                    onClose: function() {
                        noty('info', 'Error Dialog closed!');
                    }
                });
            };

            $scope.showConfirm = function() {
                events.emit('confirm', {
                    content: 'It\'s confirm dialog',
                    onConfirm: function() {
                        noty('info', 'Confirmed!');
                    }
                });
            };

            $scope.showCustom = function() {
                events.emit('modal', {
                    scope: $scope,
                    title: 'It\'s custom dialog',
                    animation: 'am-fade-and-slide-top',
                    template: 'customTpl'
                });
            };

            $scope.closeCustom = function($hide) {
                $hide();
                noty('info', 'custom modal closed!');
            };

            HomeService.getStates()
                .success(function(data) {
                    $scope.states = data;
                });

            HomeService.getMenus()
                .success(function(data) {
                    $scope.menus = data;
                });

            $scope.button = {
                radio: 'right'
            };

            HomeService.getDropdown()
                .success(function(data) {
                    $scope.dropdowns = data;
                });

            $scope.selectTab = function(tab, $event) {
                utils.stopEvent($event);
                if (tab.active) {
                    return;
                }
                tab.active = true;
                _.chain($scope.tabs)
                    .reject({
                        name: tab.name
                    })
                    .each(function(t) {
                        t.active = false;
                    });
            };

            $scope.$on('$destroy', function() {});
        };

        return ['$scope', 'events', 'utils', 'HomeService', '$alert', HomeController];

    });

})(define);
