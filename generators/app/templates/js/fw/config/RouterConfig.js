/**
 *  RouterConfig collect route information from each feature and combine them
 *  with ngRoute.
 *
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';
import _ from 'lodash';
import ConfiguratorBase from 'lib/ConfiguratorBase';

class Configurator extends ConfiguratorBase {
    constructor(features, app) {
        super(features, app);
        this.config = __config;
    }

    run() {
        if (!this.features || this.features.length === 0) {
            console.warn('No features loaded');
            return;
        }

        var routes = _.chain(this.features)
            .filter('routes')
            .pluck('routes')
            .flatten()
            .value();

        var defaultRoutes = routes.filter(function(route) {
            return route.isDefault;
        });

        if (defaultRoutes.length === 0) {
            console.warn('There is no any default route set. Try setting isDefault to the route you preferred');
        } else if (defaultRoutes.length > 1) {
            var defaultWhens = _.pluck(defaultRoutes, 'when');
            console.warn('You have set [' + defaultRoutes.length + '] default routes, they are [' + defaultWhens.join(', ') + ']. Try to correct it');
        }

        var routeWhens = _.pluck(routes, 'when').sort();

        for (var i = 0; i < routeWhens.length - 1; i++) {
            if (routeWhens[i] === routeWhens[i + 1]) {
                throw new Error('Duplicated Route: [ ' + routeWhens[i] + ' ]');
            }
        }

        this.app.constant('Routes', routes);

        this.app.config(['$locationProvider', '$routeProvider',
            function($locationProvider, $routeProvider) {

                //config each router
                _.each(routes, function(ro) {
                    $routeProvider
                        .when(ro.when, _.omit(ro, ['when']));
                });

                //config default page
                var defaultRouter = _.find(routes, 'isDefault');
                if (defaultRouter) {
                    $routeProvider.otherwise({
                        redirectTo: defaultRouter.when
                    });
                }
                <% if (answers.pushState) { %>
                $locationProvider.html5Mode({
                    enabled: true,
                    requireBase: true
                }); <% } else { %>
                $locationProvider.html5Mode(false); <% } %>

            }
        ]);
    }
}

export default Configurator;
