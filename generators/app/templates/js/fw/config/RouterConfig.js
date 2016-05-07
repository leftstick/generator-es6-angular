/**
 *  RouterConfig collect route information from each feature and combine them
 *  with ngRoute.
 *
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
import ConfiguratorBase from 'lib/ConfiguratorBase';
import pluck from 'lib/Pluck';
import omit from 'lib/Omit';

class Configurator extends ConfiguratorBase {
    constructor(features, app) {
        super(features, app);
    }

    _routeConfig($locationProvider, $routeProvider){
        //config each router
        this.routes.forEach(function(ro) {
            $routeProvider
                .when(ro.when, omit(ro, ['when']));
        });

        //config default page
        var defaultRouter = this.routes.filter(route => route.isDefault)[0];
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

    _filterRoutes(){
        return this.features
            .filter(feature => feature.routes && feature.routes.length > 0)
            .map(feature => feature.routes)
            .reduce((previous, current) => previous.concat(current), []);
    }

    _startupWarning(routes, defaultRoutes){
        if (defaultRoutes.length === 0) {
            console.warn('There is no any default route set. Try setting isDefault to the route you preferred');
        } else if (defaultRoutes.length > 1) {
            var defaultWhens = pluck(defaultRoutes, 'when');
            console.warn('You have set [' + defaultRoutes.length + '] default routes, they are [' + defaultWhens.join(', ') + ']. Try to correct it');
        }

        var routeWhens = pluck(routes, 'when').sort();

        for (var i = 0; i < routeWhens.length - 1; i++) {
            if (routeWhens[i] === routeWhens[i + 1]) {
                throw new Error('Duplicated Route: [ ' + routeWhens[i] + ' ]');
            }
        }
    }

    execute() {
        if (!this.features || this.features.length === 0) {
            console.warn('No features loaded');
            return;
        }

        this.routes = this._filterRoutes();

        var defaultRoutes = this.routes.filter(route => route.isDefault);

        this._startupWarning(this.routes, defaultRoutes);

        this.constant('Routes', this.routes);

        var routeConfig = this._routeConfig.bind(this);
        routeConfig.$inject = ['$locationProvider', '$routeProvider'];

        this.config(routeConfig);
    }
}

export default Configurator;
