/**
 *  Entrance of features
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */

import common from './common/main';
import home from './home/main';
import about from './about/main';

export default [about, ...common, home];
