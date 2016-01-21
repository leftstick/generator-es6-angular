/**
 *  Defines the HomeController controller
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';
var HomeController = function($scope, utils, HomeService, $mdToast, $mdDialog) {

    $scope.state = {};

    HomeService.getStates()
        .success(function(data) {
            $scope.states = data;
        });

    $scope.toast = function() {
        $mdToast.show(
            $mdToast.simple()
                .textContent('Simple Toast!')
                .position('top')
                .hideDelay(3000)
        );
    };

    $scope.dialog = function($event) {
        $mdDialog.show(
            $mdDialog.alert()
                .clickOutsideToClose(true)
                .title('This is an alert title')
                .textContent('You can specify some description text in here.')
                .ariaLabel('Alert Dialog Demo')
                .ok('Got it!')
                .targetEvent($event)
        );
    };

    $scope.$on('$destroy', function() {});
};

HomeController.$inject = [
    '$scope',
    'utils',
    'HomeService',
    '$mdToast',
    '$mdDialog'
];

export default HomeController;
