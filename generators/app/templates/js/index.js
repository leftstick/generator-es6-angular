/**
 *  index.js launch the application.
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
require.ensure(['splash-screen/dist/splash.min.css', 'splash-screen'], function(require) {

    require('splash-screen/dist/splash.min.css').use();
    require('splash-screen').Splash.enable('circular');
});

require.ensure(['splash-screen', './main'], function(require) {

    var App = require('./main').default;
    (new App()).run();
});
