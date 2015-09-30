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
    }

    run() {}
}

export default ConfiguratorBase;
