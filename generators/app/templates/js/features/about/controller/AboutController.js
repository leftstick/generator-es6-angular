/**
 *  Defines the AboutController controller
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
(function(define) {
    'use strict';
    /**
     * Register the AboutController class with RequireJS
     */
    define([], function() {

        /**
         * @constructor
         */
        var AboutController = function($scope, AboutService, events) {


            $scope.showSpinner = true;

            AboutService.getDemoList()
                .success(function(data) {
                    $scope.showSpinner = false;
                    $scope.originDemolist = data;
                    $scope.demolist = [].concat($scope.originDemolist);
                }).error(function(err) {
                    events.emit('error', {
                        content: err
                    });
                });

            $scope.$on('$destroy', function() {});
        };

        return ['$scope', 'AboutService', 'events', AboutController];

    });

})(define);
