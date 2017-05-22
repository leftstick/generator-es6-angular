/**
 *  Entrance of common service
 *
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
import components from './components/main';
import directives from './directives/main';
import runners from './runners/main';
import filters from './filters/main';

export default [...components, ...runners, ...directives, ...filters];
