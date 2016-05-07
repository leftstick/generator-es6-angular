/**
 *  ServiceBase class
 *
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */

class ServiceBase {

    constructor(features, app) {
        this.features = features;
        this.app = app;

        this.factory = app.factory;
        this.service = app.service;
    }

    execute() {}
}

export default ServiceBase;
