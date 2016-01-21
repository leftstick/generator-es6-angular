/**
 *  Defines the ListController controller
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';
var ListController = function($scope, ListService) {

    ListService.getDemoList()
        .success(function(data) {
            $scope.demolist = data;
        }).error(function(err) {});

    $scope.$on('$destroy', function() {});
};

ListController.$inject = ['$scope', 'ListService'];

export default ListController;
