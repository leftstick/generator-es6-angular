/**
 *  Entrance of init
 *
 *  Note: this module is part of application-level framework, developers should
 *  never touch this module
 *
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';
import header from './Header';
import body from './Body';
import validator from './Validator';

export default [header, body, validator];
