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

import FeatureBase from 'lib/FeatureBase';
import Routes from './Routes';
import AboutController from './controller/AboutController';

class Feature extends FeatureBase {

    constructor() {
        super('about');
        this.routes = Routes;
    }

    execute() {
        this.controller('AboutController', AboutController);
    }
}

export default Feature;
