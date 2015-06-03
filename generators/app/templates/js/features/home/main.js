/**
 * ******************************************************************************************************
 *
 *   Defines a home feature
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 * ******************************************************************************************************
 */
'use strict';

import FeatureBase from 'FeatureBase';
import Routes from './Routes';
import HomeController from './controller/HomeController';
import HomeService from './service/HomeService';
import customTpl from './partials/custom.html';

class Feature extends FeatureBase {

    constructor() {
        super('home');
        this.routes = Routes;
    }

    run() {
        this.mod.controller('HomeController', HomeController);
        this.mod.service('HomeService', HomeService);
        this.mod.run(['$templateCache', function($templateCache) {
            $templateCache.put('customTpl', customTpl);
        }]);
    }
}

export default Feature;
