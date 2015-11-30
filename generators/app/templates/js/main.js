/**
 *  main.js manage the whole application.
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';
import _ from 'lodash';
import angular from 'angular';
import Initializers from 'init/main';
import Extensions from 'ext/main';
import Configurators from 'config/main';
import Services from 'service/main';
import Features from 'features/main';
import Splash from 'splash-screen';

class App {

    constructor() {
        this.appName = '<%= answers.name %>';
        this.features = [];
        Features.forEach(function(Feature) {
            this.features.push(new Feature());
        }, this);
    }

    findDependencies() {
        this.depends = Extensions.slice(0);
        this.depends.push(..._.chain(this.features).filter('export').pluck('export').value());
    }

    beforeStart() {
        Initializers.forEach(function(Initializer) {
            (new Initializer(this.features)).run();
        }, this);

        this.features.forEach(function(feature) {
            feature.beforeStart();
        });
    }

    createApp() {
        this.features.forEach(function(feature) {
            feature.run();
        });
        this.app = angular.module(this.appName, this.depends);
    }

    configApp() {
        Configurators.forEach(function(Configurator) {
            (new Configurator(this.features, this.app)).run();
        }, this);
    }

    registerService() {
        Services.forEach(function(Service) {
            (new Service(this.features, this.app)).run();
        }, this);
    }

    destroySplash() {
        var _this = this;
        Splash.destroy();
        require('splash-screen/splash.min.css').unuse();
        setTimeout(function() {
            if (Splash.isRunning()) {
                _this.destroySplash();
            }
        }, 100);
    }

    launch() {
        angular.bootstrap(document, [this.appName]);
    }

    run() {
        this.findDependencies();
        this.beforeStart();
        this.createApp();
        this.configApp();
        this.registerService();
        this.destroySplash();
        this.launch();
    }

}

export default App;
