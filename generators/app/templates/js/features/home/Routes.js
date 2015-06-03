/**
 *
 *  Routes module expose route information used in home feature
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';

import tpl from './partials/home.html';

export default [{
    id: 'home',
    isDefault: true,
    when: '/home',
    controller: 'HomeController',
    template: tpl
}];
