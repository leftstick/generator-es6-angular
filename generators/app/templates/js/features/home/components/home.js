/**
 *  Defines the Home component
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
export default {
    template: `
        <logo></logo>
        <description></description>
        <github></github>
        <todo-app list="home.todos" on-toggle="home.toggleTodo(todo)" on-add="home.addTodo(todo)" on-archive="home.archive()"></todo-app>
        <footer></footer>
    `,
    controller: class {
        /*@ngInject*/
        constructor(HomeService) {
            this.HomeService = HomeService;
            this.todos = [];
        }

        $onInit() {
            this.HomeService
                .getInitTodos()
                .then(todos => {
                    this.todos = todos;
                });
        }

        addTodo(todo) {
            this.todos = [todo, ...this.todos];
        }

        toggleTodo(todo) {
            this.todos = this.todos.map(t => t.txt === todo.txt ? {
                finished: !todo.finished,
                txt: t.txt
            } : t);
        }

        archive() {
            this.todos = this.todos.filter(todo => !todo.finished);
        }

        $onDestroy() {}
    },
    controllerAs: 'home'
};
