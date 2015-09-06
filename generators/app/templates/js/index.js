/**
 *  index.js launch the application.
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';

require.ensure([], function() {

    require('splash-screen/splash.min.css');
    require('splash-screen').enable('circular');
});

require.ensure([], function() {

    var App = require('./main');
    (new App()).run();
});
