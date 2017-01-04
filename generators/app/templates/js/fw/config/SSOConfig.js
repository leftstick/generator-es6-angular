/**
 *  SSOConfig set authorised configuration.
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
export default {
    type: 'configure',
    config($httpProvider) {
        'ngInject';

        $httpProvider.defaults.headers.common.Accept = 'application/json;charset=utf-8';
        $httpProvider.defaults.withCredentials = true;
    }
};
