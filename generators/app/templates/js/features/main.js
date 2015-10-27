/**
 *  Entrance of features
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';
import _ from 'lodash';
import about from './about/main';
import common from './common/main';
import home from './home/main';

export default _.flatten([about, common, home]);
