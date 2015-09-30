/**
 *  Defines the HomeService
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
var HomeService = function($http, utils) {

    this.getStates = function() {
        return $http.get(utils.getapi('/states'));
    };

    this.getMenus = function() {
        return $http.get(utils.getapi('/menus'));
    };

    this.getDropdown = function() {
        return $http.get(utils.getapi('/dropdown'));
    };

};

export default ['$http', 'utils', HomeService];
