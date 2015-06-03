/**
 *  Entrance of features
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';

import _ from 'lodash';
import home from './home/main';
import common from './common/main';

export default _.flatten([home, common]);
