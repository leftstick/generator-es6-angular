/**
 *  Defines the ListService
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';
class ListService {

    /*@ngInject*/
    constructor($http, utils) {
        this.$http = $http;
        this.utils = utils;
    }

    getDemoList() {
        return this.$http.get(this.utils.getApi('/demolist'));
    }

}

export default ListService;
