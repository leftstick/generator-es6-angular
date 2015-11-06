'use strict';

import MockUtils from 'tools/MockUtils';
import load from 'tools/FeatureLoader';

import home from 'js/features/home/main';

load(home)

describe('Testing HomeService', function() {

    beforeEach(function() {
        angular.mock.module('home', function($provide) {
            $provide.service('utils', MockUtils);
        });
    });

    it('service in injected correctly', inject(function(HomeService) {
        expect(HomeService).not.to.equal(null);
    }));

    it('service /states respond data should be returned', inject(function($httpBackend, HomeService) {
        $httpBackend.when('GET', '/states')
            .respond({'title': 'corrent title'});
        var data;
        HomeService.getStates().success(function(d) {
            data = d;
        });
        $httpBackend.flush();
        expect(data.title).to.equal('corrent title');
    }));

    it('service /menus respond data should be returned', inject(function($httpBackend, HomeService) {
        $httpBackend.when('GET', '/menus')
            .respond({'title': 'corrent title'});
        var data;
        HomeService.getMenus().success(function(d) {
            data = d;
        });
        $httpBackend.flush();
        expect(data.title).to.equal('corrent title');
    }));

    it('service /dropdown respond data should be returned', inject(function($httpBackend, HomeService) {
        $httpBackend.when('GET', '/dropdown')
            .respond({'title': 'corrent title'});
        var data;
        HomeService.getDropdown().success(function(d) {
            data = d;
        });
        $httpBackend.flush();
        expect(data.title).to.equal('corrent title');
    }));


});
