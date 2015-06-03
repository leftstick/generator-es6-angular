/**
 *
 *  Routes module expose route information used in home feature
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
(function(define) {
    'use strict';

    define(['tpl!./partials/home.html'], function(tpl) {
        return [{
            id: 'home',
            isDefault: true,
            when: '/home',
            controller: 'HomeController',
            template: tpl()
        }];
    });

}(define));
