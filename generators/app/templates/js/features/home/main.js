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
import Routes from './Routes';

import Home from './components/home';
import Logo from './components/subs/Logo';
import Description from './components/subs/Description';
import Github from './components/subs/Github';
import TodoApp from './components/subs/Todo';
import Footer from './components/subs/Footer';

import HomeService from './service/HomeService';

export default {
    type: 'feature',
    name: 'home',
    routes: Routes,
    component: {
        home: Home,
        logo: Logo,
        description: Description,
        github: Github,
        todoApp: TodoApp,
        footer: Footer
    },
    service: {
        HomeService
    }
};
