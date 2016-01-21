/**
 *  Entrance of features
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';
import common from './common/main';
import home from './home/main';
import list from './list/main';

export default [list, ...common, home];
