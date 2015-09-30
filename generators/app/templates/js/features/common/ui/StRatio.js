/**
 *
 *  The stRatio.
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 **/
import FeatureBase from 'lib/FeatureBase';

class Feature extends FeatureBase {

    constructor() {
        super('StRatioModule');
    }

    run() {
        var dir = function() {
            return {
                restrict: 'A',
                link: function($scope, element, attr) {
                    var ratio = +(attr.stRatio);
                    element.css('width', ratio + '%');
                }
            };
        };

        this.mod.directive('stRatio', [dir]);
    }
}

export default Feature;
