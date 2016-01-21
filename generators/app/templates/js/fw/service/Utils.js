/**
 *
 *  Defines `utils` service
 *
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
'use strict';
import ServiceBase from 'lib/ServiceBase';
import config from 'etc/config';

class Service extends ServiceBase {
    constructor(features, app) {
        super(features, app);
    }

    _utils($q, $window) {

        this.base64ToString = function(str) {
            return decodeURIComponent(escape(atob(str)));
        };

        this.stringTobase64 = function(str) {
            return btoa(unescape(encodeURIComponent(str)));
        };

        this.stopEvent = function(e) {
            if (!e) {
                return;
            }
            if (e.stopPropagation) {
                e.stopPropagation();
            }
            if (e.preventDefault) {
                e.preventDefault();
            }
        };

        this.getApi = function(path) {
            if (!path) {
                return config.api;
            }
            var newPath = path;
            if (path.indexOf('/') === 0) {
                newPath = path.substring(1);
            }
            if (config.api.lastIndexOf('/') === (config.api.length - 1)) {
                return config.api + newPath;
            }
            return config.api + '/' + newPath;
        };
    }

    execute() {
        this._utils.$inject = ['$q', '$window'];
        this.service('utils', this._utils);
    }
}

export default Service;
