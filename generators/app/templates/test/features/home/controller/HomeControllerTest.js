'use strict';

import MockUtils from 'tools/MockUtils';
import load from 'tools/FeatureLoader';

import home from 'js/features/home/main';

load(home);

var MockHomeService = {
    getStates: function() {
        return {
            success: function() {}
        };
    },
    getMenus: function() {
        return {
            success: function() {}
        };
    },
    getDropdown: function() {
        return {
            success: function() {}
        };
    }
};

describe('Testing HomeController', function() {

    beforeEach(function() {
        angular.mock.module('home', function($provide) {
            $provide.service('utils', MockUtils);
        });
    });

    var $controller;

    it('controller in injected correctly', inject(function($controller) {
        var $scope = {
            $on: function() {}
        };
        var controller = $controller('HomeController', {
            $scope: $scope,
            $alert: {},
            HomeService: MockHomeService,
            events: {}
        });
        expect(controller).not.to.equal(null);
    }));

    it('showSuccessNoty works', inject(function($controller) {
        var $scope = {
            $on: function() {}
        };
        var callback = sinon.spy();
        var controller = $controller('HomeController', {
            $scope: $scope,
            $alert: {},
            HomeService: MockHomeService,
            events: {
                emit: callback
            }
        });
        $scope.showSuccessNoty();
        expect(callback.calledWith('alert', {
            type: 'success',
            message: 'This is success noty'
        })).to.be.true;
    }));

});
