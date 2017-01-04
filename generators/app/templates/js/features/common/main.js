/**
 *  Entrance of common service
 *
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */

import directives from './directives/main';
import runners from './runners/main';

export default [...runners, ...directives];
