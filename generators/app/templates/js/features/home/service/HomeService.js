/**
 *  Defines the HomeService
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';

class HomeService {

    /*@ngInject*/
    constructor($http, utils) {
        this.$http = $http;
        this.utils = utils;
    }

    getStates() {
        return this.$http.get(this.utils.getApi('/states'));
    }

}

export default HomeService;
