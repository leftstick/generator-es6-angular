/**
 *  Defines the ListController controller
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';

class ListController {

    /*@ngInject*/
    constructor($scope, ListService) {
        this.$scope = $scope;
        this.ListService = ListService;

        this._init_();
        this._destroy_();
    }

    _init_() {
        this.ListService
            .getDemoList()
            .success(data => this.demolist = data)
            .error(err => console.log(err));
    }

    _destroy_() {
        this.$scope.$on('$destroy', function() {});
    }
}

export default ListController;
