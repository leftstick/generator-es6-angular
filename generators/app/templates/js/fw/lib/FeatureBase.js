/**
 *  FeatureBase class
 *
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';
import angular from 'angular';

class FeatureBase {

    constructor(name) {
        this.export = name;
        this.mod = angular.module(this.export, []);
    }

    beforeStart() {}

    run() {}
}

export default FeatureBase;
