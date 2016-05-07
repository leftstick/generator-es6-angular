/**
 *  ConfiguratorBase class
 *
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */

class ConfiguratorBase {

    constructor(features, app) {
        this.features = features;
        this.app = app;

        this.config = app.config;
        this.constant = app.constant;
        this.value = app.value;
    }

    execute() {}
}

export default ConfiguratorBase;
