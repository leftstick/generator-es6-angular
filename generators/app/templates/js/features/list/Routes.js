/**
 *
 *  Routes module expose route information used in list feature
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';
import tpl from './partials/list.html';

export default [
    {
        id: 'list',
        isDefault: false,
        when: '/list',
        controller: 'ListController',
        controllerAs: 'list',
        template: tpl
    }
];
