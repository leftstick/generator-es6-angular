/**
 *  Defines the HomeController controller
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';

class HomeController {

    /*@ngInject*/
    constructor($scope, utils, HomeService, $mdToast, $mdDialog) {
        this.$scope = $scope;
        this.utils = utils;
        this.HomeService = HomeService;
        this.$mdToast = $mdToast;
        this.$mdDialog = $mdDialog;

        this._init_();
        this._destroy_();
    }

    _init_() {
        this.state = {};
        this.HomeService.getStates()
            .success((data) => this.states = data);
    }

    toast() {
        this.$mdToast.show(
            this.$mdToast.simple()
                .textContent('Simple Toast!')
                .position('top')
                .hideDelay(3000)
        );
    }

    dialog($event) {
        this.$mdDialog.show(
            this.$mdDialog.alert()
                .clickOutsideToClose(true)
                .title('This is an alert title')
                .textContent('You can specify some description text in here.')
                .ariaLabel('Alert Dialog Demo')
                .ok('Got it!')
                .targetEvent($event)
        );
    }

    _destroy_() {
        this.$scope.$on('$destroy', function() {
            console.log('asdfsafa');
        });
    }
}

export default HomeController;
