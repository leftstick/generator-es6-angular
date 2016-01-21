/**
 *  Defines the Toolbar of whole application.
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';

import FeatureBase from 'lib/FeatureBase';
import ToolbarTpl from './Toolbar.html';
import { element } from 'angular';

class Feature extends FeatureBase {

    constructor() {
        super('ToolbarModule');
        this.$body = element(document.body);
    }

    beforeStart() {
        this.$body.prepend(ToolbarTpl);
    }

    _ToolbarController($scope, $mdSidenav, utils, $location) {
        $scope.toggleSidebar = function(componentId) {
            $mdSidenav(componentId).toggle();
        };

        $scope.go = function($event, target) {
            utils.stopEvent($event);
            $location.path(target);
        };
    }

    execute() {
        this._ToolbarController.$inject = [
            '$scope',
            '$mdSidenav',
            'utils',
            '$location'
        ];
        this.controller('ToolbarController', this._ToolbarController);
    }
}

export default Feature;
