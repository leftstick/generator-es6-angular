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
        this.$body = angular.element(document.body);
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
        this.indicator.$inject = ['$rootScope', 'Routes'];
        this.mod.run(this.indicator);
    }
}

export default Feature;
