/**
 *  Entrance of features
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */

import about from './about/main';
import common from './common/main';
import home from './home/main';

export default [about, ...common, home];
