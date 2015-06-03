/**
 *  BodyInit set ng-view to the index.html.
 *
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';
import InitBase from 'InitBase';
import $ from 'jquery';

class Initializer extends InitBase {
    run() {
        $('body').append('<div ng-view autoscroll="true"></div>');
    }
}

export default Initializer;
