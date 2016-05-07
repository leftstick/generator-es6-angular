/**
 *  FeatureBase class
 *
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */

import {module} from 'angular';

class FeatureBase {

    constructor(name) {
        this.export = name;
        this.mod = module(this.export, []);

        this.controller = this.mod.controller;
        this.factory = this.mod.factory;
        this.service = this.mod.service;
        this.directive = this.mod.directive;
        this.filter = this.mod.filter;
        this.config = this.mod.config;
        this.run = this.mod.run;
    }

    beforeStart() {}

    execute() {}
}

export default FeatureBase;
