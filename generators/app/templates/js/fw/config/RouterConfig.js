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
import ConfiguratorBase from 'lib/ConfiguratorBase';
import pluck from 'lib/Pluck';
import omit from 'lib/Omit';

class Configurator extends ConfiguratorBase {
    constructor(features, app) {
        super(features, app);
    }

    routeConfig($locationProvider, $routeProvider){
        //config each router
        this.routes.forEach(function(ro) {
            $routeProvider
                .when(ro.when, omit(ro, ['when']));
        });

        //config default page
        var defaultRouter = this.routes.filter(function(route) {
            return route.isDefault;
        })[0];
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

    execute() {
        if (!this.features || this.features.length === 0) {
            console.warn('No features loaded');
            return;
        }

        this.routes = this.features
            .filter(function(feature) {
                return feature.routes && feature.routes.length > 0;
            })
            .map(function(feature) {
                return feature.routes;
            })
            .reduce(function(previous, current) {
                return previous.concat(current);
            }, []);

        var defaultRoutes = this.routes.filter(function(route) {
            return route.isDefault;
        });

        if (defaultRoutes.length === 0) {
            console.warn('There is no any default route set. Try setting isDefault to the route you preferred');
        } else if (defaultRoutes.length > 1) {
            var defaultWhens = pluck(defaultRoutes, 'when');
            console.warn('You have set [' + defaultRoutes.length + '] default routes, they are [' + defaultWhens.join(', ') + ']. Try to correct it');
        }

        var routeWhens = pluck(this.routes, 'when').sort();

        for (var i = 0; i < routeWhens.length - 1; i++) {
            if (routeWhens[i] === routeWhens[i + 1]) {
                throw new Error('Duplicated Route: [ ' + routeWhens[i] + ' ]');
            }
        }

        this.constant('Routes', this.routes);

        var routeConfig = this.routeConfig.bind(this);

        routeConfig.$inject = [
            '$locationProvider',
            '$routeProvider'
        ];
        this.config(routeConfig);
    }
}

export default Configurator;
