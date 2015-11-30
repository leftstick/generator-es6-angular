/**
 *  Defines the Footer Module.
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';
import FeatureBase from 'lib/FeatureBase';
import angular from 'angular';
import tpl from './Footer.html';
import __config from 'etc/config';

class Feature extends FeatureBase {

    constructor() {
        super('FooterModule');
        this.config = __config;
        this.$body = angular.element(document.body);
    }

    beforeStart() {
        this.$body.append(tpl);
    }

    run() {
        var self = this;
        this.mod.controller('FooterCtrl', [
            '$scope',
            function($scope) {
                $scope.config = self.config;
            }
        ]);
    }
}

export default Feature;
