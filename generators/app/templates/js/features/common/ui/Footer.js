/**
 *  Defines the Footer Module.
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';
import FeatureBase from 'FeatureBase';
import $ from 'jquery';
import tpl from './Footer.html';

class Feature extends FeatureBase {

    constructor() {
        super('FooterModule');
        this.config = __config;
        this.$body = $('body');
    }

    beforeStart() {
        this.$body.append(tpl);
    }

    run() {
        var self = this;
        this.mod.controller('FooterCtrl', ['$scope', function($scope) {
            $scope.config = self.config;
        }]);
    }
}

export default Feature;
