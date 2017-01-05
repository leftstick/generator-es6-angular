/**
 * ******************************************************************************************************
 *
 *   Defines a about feature
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 * ******************************************************************************************************
 */
import routes from './routes';

import about from './components/about';
import why from './components/subs/why';
import more from './components/subs/more';

export default {
    type: 'feature',
    name: 'about',
    routes,
    component: {
        about,
        why,
        more
    }
};
