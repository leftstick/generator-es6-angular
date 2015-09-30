/**
 *  index.js launch the application.
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
require.ensure(['splash-screen/splash.min.css', 'splash-screen'], function(require) {

    require('splash-screen/splash.min.css');
    require('splash-screen').enable('circular');
});

require.ensure(['splash-screen'], function(require) {

    var App = require('./main');
    (new App()).run();
});
