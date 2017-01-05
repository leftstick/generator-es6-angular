/**
 * ******************************************************************************************************
 *
 *   Defines a home feature
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 * ******************************************************************************************************
 */
import routes from './routes';

import home from './components/home';
import logo from './components/subs/logo';
import description from './components/subs/description';
import github from './components/subs/github';
import todoApp from './components/subs/todo';
import footer from './components/subs/tooter';

import HomeService from './service/HomeService';

export default {
    type: 'feature',
    name: 'home',
    routes,
    component: {
        home,
        logo,
        description,
        github,
        todoApp,
        footer
    },
    service: {
        HomeService
    }
};
