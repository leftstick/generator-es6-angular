/**
 *  ConfiguratorBase class
 *
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';
class ConfiguratorBase {

    constructor(features, app) {
        this.features = features;
        this.app = app;
    }

    run() {}
}

export default ConfiguratorBase;
