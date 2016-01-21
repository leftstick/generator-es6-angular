/**
 *  Defines the ListService
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';
var ListService = function($http, utils) {

    this.getDemoList = function() {
        return $http.get(utils.getApi('/demolist'));
    };

};

ListService.$inject = ['$http', 'utils'];

export default ListService;
