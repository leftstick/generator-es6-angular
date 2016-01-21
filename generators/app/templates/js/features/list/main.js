/**
 * ******************************************************************************************************
 *
 *   Defines a about feature
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 * ******************************************************************************************************
 */
'use strict';
import FeatureBase from 'lib/FeatureBase';
import Routes from './Routes';
import ListController from './controller/ListController';
import ListService from './service/ListService';

class Feature extends FeatureBase {

    constructor() {
        super('about');
        this.routes = Routes;
    }

    execute() {
        this.controller('ListController', ListController);
        this.service('ListService', ListService);
    }
}

export default Feature;
