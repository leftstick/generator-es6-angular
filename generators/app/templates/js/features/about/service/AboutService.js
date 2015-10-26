/**
 *  Defines the AboutService
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
var AboutService = function($http, utils) {

    this.getDemoList = function() {
        return $http.get(utils.getApi('/demolist'));
    };

};

export default ['$http', 'utils', AboutService];
