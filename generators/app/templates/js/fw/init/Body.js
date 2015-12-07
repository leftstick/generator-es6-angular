/**
 *  BodyInit set ng-view to the index.html.
 *
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';
import InitBase from 'lib/InitBase';
import { element } from 'angular';

class Initializer extends InitBase {
    execute() {
        element(document.body).append('<div ng-view autoscroll="true" class="main"></div>');
    }
}

export default Initializer;
