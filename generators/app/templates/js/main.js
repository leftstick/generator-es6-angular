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
import Initializers from './fw/init/main';
import Extensions from './fw/ext/main';
import Configurators from './fw/config/main';
import Services from './fw/service/main';
import Features from './features/main';
import Splash from 'splash-screen';

class App {

    constructor() {
        require('../less/main.less');
        this.appName = '<%= answers.name %>';
        this.features = [];
        _.each(Features, function(Feature) {
            this.features.push(new Feature());
        }, this);
    }

    findDependencies() {
        this.depends = _.clone(Extensions);
        this.depends.push(..._.chain(this.features).filter('export').pluck('export').value());
    }

    beforeStart() {
        Initializers.forEach(function(Initializer) {
            (new Initializer()).run();
        });

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
        Splash.destroy();
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
