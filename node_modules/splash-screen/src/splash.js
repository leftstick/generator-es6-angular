/**
 * splash-screen is very simple to use to setup a splash-screen for your
 * application
 *
 * @author Howard.Zuo
 * @date   Feb 6th, 2015
 *
 **/
(function(global, factory) {

    'use strict';

    if (typeof exports === 'object') {
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else {
        global.Splash = factory();
    }

}(this, function() {
    'use strict';

    var Splash = {};
    Splash.version = '2.1.0';

    var elementClass = function(tag, className) {
        var ele = document.createElement(tag);
        ele.setAttribute('class', className);
        return ele;
    };

    var elementTxt = function(tag, text) {
        var ele = document.createElement(tag);
        ele.innerText = text;
        return ele;
    };

    var splashDiv = function() {
        return elementClass('div', 'splash');
    };

    var tailingHandler = function($splash) {
        $splash.appendChild(elementTxt('span', 'Loading'));
    };

    var windcatcherHandler = function($splash) {
        for (var i = 0; i < 8; i++) {
            $splash.appendChild(elementClass('div', 'blade'));
        }
    };

    var circularHandler = function($splash) {

        var arr = ['spinner-blue', 'spinner-red', 'spinner-yellow', 'spinner-green'];

        for (var i = 0; i < arr.length; i++) {
            var layer = elementClass('div', 'spinner-layer ' + arr[i]);

            var circleLeft = elementClass('div', 'circle-clipper left');
            var circle01 = elementClass('div', 'circle');

            circleLeft.appendChild(circle01);
            layer.appendChild(circleLeft);

            var gapPatch = elementClass('div', 'gap-patch');
            var circle02 = elementClass('div', 'circle');

            gapPatch.appendChild(circle02);
            layer.appendChild(gapPatch);

            var circleRight = elementClass('div', 'circle-clipper right');
            var circle03 = elementClass('div', 'circle');
            circleRight.appendChild(circle03);

            layer.appendChild(circleRight);

            $splash.appendChild(layer);
        }

    };

    var emptyHandler = function() {};

    var themes = {
        tailing: tailingHandler,
        windcatcher: windcatcherHandler,
        'audio-wave': emptyHandler,
        'spinner-section': emptyHandler,
        'spinner-section-far': emptyHandler,
        circular: circularHandler
    };

    var hasClass = function(ele, cls) {
        return ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
    };

    var addClass = function(ele, cls) {
        if (!hasClass(ele, cls)) {
            ele.className += ' ' + cls;
        }
    };

    var removeClass = function(ele, cls) {
        if (hasClass(ele, cls)) {
            var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
            ele.className = ele.className.replace(reg, ' ');
        }
    };

    var loadBody = function(callback) {
        var $body = document.body;
        if ($body) {
            callback($body);
            return;
        }
        setTimeout(function() {
            $body = document.body;
            if (!$body) {
                loadBody(callback);
                return;
            }
            callback($body);
        }, 100);
    };

    var $splash;

    Splash.enable = function(theme) {
        loadBody(function($body) {
            addClass($body, 'splashing');
            $splash = splashDiv();
            $body.appendChild($splash);

            if (!theme || !themes[theme]) {
                theme = 'tailing';
            }
            themes[theme]($splash);
            addClass($splash, theme);
        });
    };

    Splash.isRunning = function() {
        if (!document || !document.body) {
            return;
        }
        return hasClass(document.body, 'splashing');
    };

    Splash.destroy = function() {
        loadBody(function($body) {
            removeClass($body, 'splashing');
            if ($splash) {
                $body.removeChild($splash);
            }
        });
    };

    return Splash;

}));
