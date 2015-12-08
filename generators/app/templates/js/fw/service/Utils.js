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
import { isObject, lowercase } from 'angular';

class Service extends ServiceBase {
    constructor(features, app) {
        super(features, app);
    }

    utils($q, $window, CONF) {
        this.base64ToString = function(str) {
            return decodeURIComponent(escape(atob(str)));
        };

        this.stringTobase64 = function(str) {
            return btoa(unescape(encodeURIComponent(str)));
        };

        this.formEncodedOpts = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            transformRequest: function(data) {
                // If this is not an object, defer to native stringification.
                if (!isObject(data)) {
                    return (!data ? '' : data.toString());
                }
                var buffer = [];
                // Serialize each key in the object.
                for (var name in data) {
                    if (!data.hasOwnProperty(name)) {
                        continue;
                    }
                    var value = data[name];
                    buffer.push(
                        encodeURIComponent(name) +
                        '=' +
                        encodeURIComponent(!value ? '' : value)
                    );
                }
                // Serialize the buffer and clean it up for transportation.
                return buffer
                    .join('&')
                    .replace(/%20/g, '+');
            }
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
                return CONF.api;
            }
            var newPath = path;
            if (path.indexOf('/') === 0) {
                newPath = path.substring(1);
            }
            if (CONF.api.lastIndexOf('/') === (CONF.api.length - 1)) {
                return CONF.api + newPath;
            }
            return CONF.api + '/' + newPath;
        };

        this.supportCanvas = !!($window.FileReader && $window.CanvasRenderingContext2D);

        this.isFile = function(item) {
            return isObject(item) && item instanceof $window.File;
        };

        this.isImage = function(file) {
            if (!file) {
                return false;
            }

            var type = '|' + lowercase(file.type.slice(file.type.lastIndexOf('/') + 1)) + '|';
            return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
        };
    }

    execute() {
        this.utils.$inject = ['$q', '$window', 'CONF'];
        this.service('utils', this.utils);
    }
}

export default Service;
