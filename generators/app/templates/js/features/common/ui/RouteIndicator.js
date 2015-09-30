/**
 *
 *  Defines RouteIndicator service
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
import _ from 'lodash';
import angular from 'angular';
import FeatureBase from 'lib/FeatureBase';

class Feature extends FeatureBase {

    constructor() {
        super('RouteIndicator');
        this.$body = angular.element(document.body);
    }

    run() {
        var self = this;
        this.mod.run([
            '$rootScope',
            'Routes',
            function($rootScope, Routes) {
                var classes = _.pluck(Routes, 'id').join(' ');
                $rootScope.$on('$routeChangeSuccess', function(e, route) {
                    self.$body.removeClass(classes);
                    if (route && route.$$route && route.$$route.id) {
                        self.$body.addClass(route.$$route.id);
                    }
                });
            }
        ]);
    }
}

export default Feature;
