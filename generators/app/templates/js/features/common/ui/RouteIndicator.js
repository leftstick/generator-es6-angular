/**
 *
 *  Defines RouteIndicator service
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */

import {element} from 'angular';
import pluck from 'lib/Pluck';
import FeatureBase from 'lib/FeatureBase';

class Feature extends FeatureBase {

    constructor() {
        super('RouteIndicator');
    }

    _indicator($rootScope, Routes) {
        'ngInject';

        var $body = element(document.body);
        var classes = pluck(Routes, 'id').join(' ');

        $rootScope.$on('$routeChangeSuccess', function(e, route) {
            $body.removeClass(classes);
            if (route && route.$$route && route.$$route.id) {
                $body.addClass(route.$$route.id);
            }
        });
    }

    execute() {
        this.run(this._indicator);
    }
}

export default Feature;
