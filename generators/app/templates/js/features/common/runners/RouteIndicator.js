/**
 *
 *  Defines RouteIndicator service
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
import {element} from 'angular';
import {pluck} from '../../../fw/helper/Object';

export default {
    type: 'runner',
    run($rootScope, Routes) {
        'ngInject';

        const $body = element(document.body);
        const classes = pluck(Routes, 'id').join(' ');

        $rootScope.$on('$routeChangeSuccess', function(e, route) {
            $body.removeClass(classes);
            if (route && route.$$route && route.$$route.id) {
                $body.addClass(route.$$route.id);
            }
        });
    }
};