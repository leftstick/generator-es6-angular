/**
 *
 *  Defines RouteIndicator service
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';

import { element } from 'angular';
import pluck from 'lib/Pluck';
import FeatureBase from 'lib/FeatureBase';

class Feature extends FeatureBase {

    constructor() {
        super('RouteIndicator');
        this.$body = element(document.body);
    }

    indicator($rootScope, Routes) {
        var _this = this;
        var classes = pluck(Routes, 'id').join(' ');
        $rootScope.$on('$routeChangeSuccess', function(e, route) {
            _this.$body.removeClass(classes);
            if (route && route.$$route && route.$$route.id) {
                _this.$body.addClass(route.$$route.id);
            }
        });
    }

    execute() {
        var indicator = this.indicator.bind(this);
        indicator.$inject = ['$rootScope', 'Routes'];
        this.run(indicator);
    }
}

export default Feature;
