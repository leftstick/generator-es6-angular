/**
 *  Defines the Sidebar of whole application.
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';

import FeatureBase from 'lib/FeatureBase';
import SidebarTpl from './Sidebar.html';
import { element } from 'angular';

class Feature extends FeatureBase {

    constructor() {
        super('SidebarModule');
    }

    beforeStart() {
        element(document.querySelector('#main')).prepend(SidebarTpl);
    }

    /*@ngInject*/
    _SidebarController($scope, $mdSidenav, utils, $location) {
        $scope.go = function($event, target) {
            utils.stopEvent($event);
            $location.path(target);
            $mdSidenav('left-side').toggle();
        };
    }

    execute() {
        this.controller('SidebarController', this._SidebarController);
    }
}

export default Feature;
