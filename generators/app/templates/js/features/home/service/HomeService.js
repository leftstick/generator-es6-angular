/**
 *  Defines the HomeService
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
export default class {

    /*@ngInject*/
    constructor($q) {
        this.$q = $q;
    }

    getInitTodos() {
        return this.$q(resolve => {
            setTimeout(function() {
                resolve([
                    {
                        finished: true,
                        txt: 'Learn JavaScript'
                    },
                    {
                        txt: 'Learn AngularJS'
                    },
                    {
                        txt: 'Learn webpack'
                    },
                    {
                        txt: 'Learn node'
                    }
                ]);
            }, 1500);
        });
    }
}
