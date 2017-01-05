/**
 *  Set constant of Routes
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
import Things from 'features/main';

export default {
    type: 'value',

    constant: {
        Routes: Things
            .filter(t => t.type === 'feature')
            .filter(feature => feature.routes && feature.routes.length > 0)
            .map(feature => feature.routes)
            .reduce((previous, current) => previous.concat(current), [])
    }
};
