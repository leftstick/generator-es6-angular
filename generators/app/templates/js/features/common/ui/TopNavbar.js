/**
 *  Defines the TopNavbar Module.
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';
import $ from 'jquery';
import FeatureBase from 'FeatureBase';
import tpl from './TopNavbar.html';
import asideTpl from './Aside.html';

class Feature extends FeatureBase {

    constructor() {
        super('TopnavModule');
        this.$body = $('body');
    }

    beforeStart() {
        this.$body.prepend(tpl);
    }

    run() {
        this.mod.run(['$templateCache', function($templateCache) {
            $templateCache.put('aside', asideTpl);
        }]);
        this.mod.controller('HeaderCtrl', [function() {}]);
    }
}

export default Feature;
