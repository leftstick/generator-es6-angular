/**
 *  Entrance of common ui
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';

import alerts from './Alerts';
import autofocus from './Autofocus';
import confirm from './Confirm';
import error from './Error';
import footer from './Footer';
import info from './Info';
import modal from './Modal';
import routeIndicator from './RouteIndicator';
import stRatio from './StRatio';
import topNavbar from './TopNavbar';

export default [
    alerts,
    autofocus,
    confirm,
    error,
    footer,
    info,
    modal,
    routeIndicator,
    stRatio,
    topNavbar
];
