/**
 *  Entrance of common service
 *
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */

import logical from './logical/main';
import ui from './ui/main';

export default [...logical, ...ui];
