/**
 *  index.js launch the application.
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
require.ensure(['splash-screen/splash.min.css', 'splash-screen'], function(require) {

    require('splash-screen/splash.min.css').use();
    require('splash-screen').enable('circular');
});

require.ensure(['css/main.css', 'splash-screen', './main'], function(require) {

    require('css/main.css').use();

    var App = require('./main').default;
    (new App()).run();
});
