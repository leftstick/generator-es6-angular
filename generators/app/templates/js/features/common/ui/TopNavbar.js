/**
 *  Defines the TopNavbar Module.
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';

import { element } from 'angular';
import FeatureBase from 'lib/FeatureBase';
import tpl from './TopNavbar.html';
import asideTpl from './Aside.html';

class Feature extends FeatureBase {

    constructor() {
        super('TopnavModule');
        this.$body = element(document.body);
    }

    beforeStart() {
        this.$body.prepend(tpl);
    }

    templateCaching($templateCache) {
        $templateCache.put('aside', asideTpl);
    }

    HeaderCtrl($scope) {
    }

    execute() {
        this.templateCaching.$inject = ['$templateCache'];
        this.run(this.templateCaching);

        this.HeaderCtrl.$inject = ['$scope'];
        this.controller('HeaderCtrl', this.HeaderCtrl);
    }
}

export default Feature;
