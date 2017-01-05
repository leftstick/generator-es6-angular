/**
 *  Collection of Event helpers
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
export function stop(e) {
    if (e.stopPropagation) {
        e.stopPropagation();
    }
    if (e.preventDefault) {
        e.preventDefault();
    }
}
