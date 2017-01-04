/**
 *  application.js root component of the whole app.
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
export default {
    template: `
    <ul id="nav">
        <li ng-click="app.activeRoute('home')">
            <a href="<%= answers.pushState ? '' : '#!' %>/home" class="nav-link" ng-class="{active: app.route === 'home'}">HOME</a>
        </li>
        <li ng-click="app.activeRoute('about')">
            <a href="<%= answers.pushState ? '' : '#!' %>/about" class="nav-link" ng-class="{active: app.route === 'about'}">ABOUT</a>
        </li>
    </ul>
    <div ng-view autoscroll="true"></div>
    `,
    controller: class Application {
        /* @ngInject */
        constructor($rootScope) {
            this.route = 'home';

            $rootScope.$on('$routeChangeSuccess', (e, next) => {
                if (next.$$route && next.$$route.id) {
                    this.route = next.$$route.id;
                }
            });
        }

        activeRoute(name) {
            this.route = name;
        }
    },
    controllerAs: 'app'
};
