/**
 *
 *  config.js which contains the configuration of app, and it should never be cached
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 **/
(function(global) {
    'use strict';

    global.__config = {
        'appname': '<%= answers.name %>',
        'base': '',
        'version': '1.0.0',
        'icp': 'ICP here',
        'protocol': 'https://raw.githubusercontent.com/leftstick/generator-require-angular/master/LICENSE',
        'api': '/mock'
    };

}(window));
