/**
 *  Entrance of config
 *
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';
import app from './AppConfig';
import loading from './LoadingBarConfig';
import router from './RouterConfig';
import sso from './SSOConfig';

export default [app, loading, router, sso];
