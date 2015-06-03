/**
 *
 *  Routes module expose route information used in about feature
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
(function(define) {
    'use strict';

    define(['tpl!./partials/about.html'], function(tpl) {
        return [{
            id: 'about',
            isDefault: false,
            when: '/about',
            controller: 'AboutController',
            template: tpl()
        }];
    });

}(define));
