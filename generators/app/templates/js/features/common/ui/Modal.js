/**
 *  Defines the Modal
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
import FeatureBase from 'lib/FeatureBase';

var defaults = {
    animation: 'am-fade',
    backdropAnimation: 'am-fade',
    placement: 'top',
    title: '',
    content: '',
    html: false,
    backdrop: true,
    keyboard: true,
    show: true,
    container: false,
    contentTemplate: false,
    prefixEvent: 'modal',
    id: ''
};

class Feature extends FeatureBase {

    constructor() {
        super('ModalWrapper');
    }

    run() {
        this.mod.run([
            'events',
            '$modal',
            function(events, $modal) {

                events.on('modal', function(opts) {
                    var options = _.defaults(opts, defaults);
                    options.title = opts.title;
                    $modal(options);
                });

            }
        ]);
    }
}

export default Feature;
