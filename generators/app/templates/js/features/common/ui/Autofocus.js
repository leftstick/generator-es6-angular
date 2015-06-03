/**
 *  Defines the Autofocus Module.
 *  This module used to override the original `autofocus` attribute since it doesn't work properly with ngRoute
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';
import FeatureBase from 'FeatureBase';

class Feature extends FeatureBase {

    constructor() {
        super('AutofocusModule');
    }

    run() {
        this.mod.directive('autofocus', function() {
            return {
                restrict: 'A',
                link: function($scope, element) {
                    element[0].focus();
                }
            };
        });
    }
}

export default Feature;
