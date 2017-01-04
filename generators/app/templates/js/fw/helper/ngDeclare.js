/**
 *  Collection of framework registers
 *
 *  @author  <%= answers.username %>
 *  @date    <%= answers.date %>
 *
 */
import angular from 'angular';
import {isString, isClass, isFunction, isObject, isArray} from './Object';

const FEATURE_SET = [
    'provider', 'factory', 'service', 'decorator',
    'value', 'constant',
    'animation',
    'filter',
    'controller',
    'directive', 'component'
];
const FUNCTIONS_SET = ['provider', 'factory', 'service', 'decorator', 'animation', 'filter', 'controller', 'directive'];
const ANYTHING_SET = ['value', 'constant'];
const NO_KEY_SET = ['run', 'config'];
export function declareFeatures(features) {
    features
        .map(feature => ({
            feature: feature,
            defines: getDefinedPairs(feature, FEATURE_SET)
        }))
        .forEach(obj => {
            const featureModule = angular.module(obj.feature.name, []);
            const defines = getDefinedMethods(obj.feature, NO_KEY_SET);
            defines.forEach(def => {
                featureModule[def.method](def.value);
            });
            obj
                .defines
                .forEach(defined => {
                    if (defined.method === 'directive') {
                        if (isClass(defined.value)) {
                            return featureModule[defined.method](defined.key, () => new defined.value());
                        }
                    }
                    if (defined.method === 'component') {
                        return featureModule[defined.method](defined.key, defined.value);
                    }
                    if (FUNCTIONS_SET.includes(defined.method)) {
                        if (isInjectedFunction(defined.value)) {
                            return featureModule[defined.method](defined.key, defined.value);
                        }
                    }
                    if (ANYTHING_SET.includes(defined.method)) {
                        return featureModule[defined.method](defined.key, defined.value);
                    }
                });
        });
}

const VALUE_SET = ['value', 'constant'];
export function declareValues(app, valueObjs) {
    valueObjs
        .map(valueObj => getDefinedPairs(valueObj, VALUE_SET))
        .reduce(flatten, [])
        .forEach(obj => {
            if (isFunction(obj.value)) {
                return app[obj.method](obj.key, obj.value());
            }
            if (isObject(obj.value)) {
                return app[obj.method](obj.key, obj.value);
            }
        });
}

export function declareDirectives(app, directives) {
    directives
        .filter(dir => {
            const shouldUse = (isClass(dir.directiveFactory) || isInjectedFunction(dir.directiveFactory)) && dir.name;
            if (!shouldUse) {
                console.warn('directive defined without property [name], or method [directiveFactory]');
            }
            return shouldUse;
        })
        .forEach(dir => {
            if (isFunction(dir.directiveFactory)) {
                return app.directive(dir.name, dir.directiveFactory);
            }
            app.directive(dir.name, () => new dir.directiveFactory());
        });
}

export function declareRunners(app, runners) {
    runners
        .filter(runner => {
            const shouldUse = isInjectedFunction(runner.run);
            if (!shouldUse) {
                console.warn('runner defined without run method');
            }
            return shouldUse;
        })
        .forEach(runner => {
            app.run(runner.run);
        });
}

function getDefinedPairs(valueObj, SETS) {
    return Object
        .keys(valueObj)
        .filter(method => SETS.includes(method) && Object.keys(valueObj[method]).length)
        .map(method => ({method: method, defines: valueObj[method]}))
        .map(combine => {
            return Object
                .keys(combine.defines)
                .map(key => ({
                    method: combine.method,
                    key: key,
                    value: combine.defines[key]
                }));
        })
        .reduce(flatten, []);
}

function getDefinedMethods(valueObj, SETS) {
    return Object
        .keys(valueObj)
        .filter(key => SETS.includes(key) && (isArray(valueObj[key] || isInjectedFunction(valueObj[key]))))
        .map(method => {
            if (isInjectedFunction(valueObj[method])) {
                return [{
                    method: method,
                    value: valueObj[method]
                }];
            }
            return valueObj[method]
                .filter(v => isInjectedFunction(v))
                .map(v => ({method: method, value: v}));
        })
        .reduce(flatten, []);
}


function flatten(previous, current) {
    return previous.concat(current);
}

function isInjectedFunction(func) {
    if (!isArray(func) && !isFunction(func)) {
        return false;
    }
    if (isFunction(func)) {
        return true;
    }
    if (!func.length) {
        return false;
    }
    if (func.length > 1) {
        if (!func.slice(0, func.length - 1).every(k => isString(k))) {
            return false;
        }
    }
    if (!isFunction(func[func.length - 1])) {
        return false;
    }

    return true;
}
