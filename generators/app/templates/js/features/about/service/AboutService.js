/**
 *  Defines the AboutService
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
(function(define) {
    'use strict';

    /**
     * Register the AboutService class with RequireJS
     */
    define([], function() {

        /**
         * @constructor
         */
        var AboutService = function($http, utils) {

            this.getDemoList = function() {
                return $http.get(utils.getapi('/demolist'));
            };

        };

        return ['$http', 'utils', AboutService];

    });

})(define);
