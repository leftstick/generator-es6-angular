/**
 *  Defines the AboutController controller
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
var AboutController = function($scope, AboutService, events) {

    $scope.showSpinner = true;

    AboutService.getDemoList()
        .success(function(data) {
            $scope.showSpinner = false;
            $scope.originDemolist = data;
            $scope.demolist = [].concat($scope.originDemolist);
        }).error(function(err) {
        events.emit('error', {content: err});
    });

    $scope.$on('$destroy', function() {});
};

export default [
    '$scope',
    'AboutService',
    'events',
    AboutController
];
