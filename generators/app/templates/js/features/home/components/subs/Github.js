/**
 *  Defines the Github sub component
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
export default {
    template: `
        <div id="github">
            <iframe src="http://ghbtns.com/github-btn.html?user=leftstick&repo=generator-es6-angular&type=star&count=true" allowtransparency="true" frameborder="0" scrolling="0" width="100" height="20"></iframe>
            <iframe src="http://ghbtns.com/github-btn.html?user=leftstick&repo=generator-es6-angular&type=fork&count=true" allowtransparency="true" frameborder="0" scrolling="0" width="100" height="20"></iframe>
        </div>
    `,
    controller: class {
        constructor() {}
    }
};
