/**
 *  Defines the Todo sub component
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
import {stop} from '../../../../fw/helper/Event';

export default {
    bindings: {
        list: '<',
        onAdd: '&',
        onDelete: '&',
        onToggle: '&',
        onArchive: '&'
    },
    template: `
        <div id="todo-app">
            <h2>Simple TODO app</h2>
            <input type="text" placeholder="Typing here..." ng-keyup="todo.addTodo($event)">

            <span>{{ todo.remaining() }} of {{ todo.list.length }} remaining</span>

            <ul class="todos">
                <li ng-repeat="item in todo.list">
                    <input type="checkbox" ng-checked="::item.finished" ng-click="todo.toggleTodo($event, item)">
                    <span ng-style="{'text-decoration': item.finished ? 'line-through' : 'none'}">
                        {{ item.txt }}
                    </span>
                </li>
            </ul>

            <a href="" class="archive" ng-disabled="todo.remaining() === todo.list.length" ng-click="todo.onArchive()">archive</a>
        </div>
    `,
    controller: class {
        constructor() {}

        $onChanges(changesObj) {
            this.previousList = changesObj.list.currentValue;
        }

        $doCheck() {
            return this.list !== this.previousList;
        }

        addTodo(e) {
            if (e.keyCode !== 13) {
                return;
            }
            this.onAdd({
                todo: {
                    txt: e.target.value,
                    finished: false
                }
            });
            e.target.value = '';
        }

        toggleTodo(e, todo) {
            stop(e);
            this.onToggle({todo});
        }

        remaining() {
            return this.list.reduce((n, todo) => n + +!todo.finished, 0);
        }

    },
    controllerAs: 'todo'
};
