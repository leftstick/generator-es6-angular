/**
 *
 *  The stRatio.
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 **/
'use strict';

import FeatureBase from 'lib/FeatureBase';

class Feature extends FeatureBase {

    constructor() {
        super('StRatioModule');
    }

    stRatio() {
        return {
            restrict: 'A',
            link: function($scope, element, attr) {
                var ratio = +(attr.stRatio);
                element.css('width', ratio + '%');
            }
        };
    }

    execute() {
        this.directive('stRatio', this.stRatio);
    }
}

export default Feature;
