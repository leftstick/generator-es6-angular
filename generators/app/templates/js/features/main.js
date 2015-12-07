/**
 *  Entrance of features
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';
import about from './about/main';
import common from './common/main';
import home from './home/main';

export default [about, ...common, home];
