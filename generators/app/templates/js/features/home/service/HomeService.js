/**
 *  Defines the HomeService
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
var HomeService = function($http, utils) {

    this.getStates = function() {
        return $http.get(utils.getApi('/states'));
    };

    this.getMenus = function() {
        return $http.get(utils.getApi('/menus'));
    };

    this.getDropdown = function() {
        return $http.get(utils.getApi('/dropdown'));
    };

};

export default ['$http', 'utils', HomeService];
