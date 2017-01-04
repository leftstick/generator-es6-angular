/**
 *  Defines the Logo sub component
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
import logoUrl from 'img/AngularJS-large.png';

export default {
    template: `
        <div id="logo-wrap">
            <img id="logo" src="${logoUrl}">
            <h1>generator-es6-angular</h1>
        </div>
    `,
    controller: class {
        constructor() {}
    }
};
