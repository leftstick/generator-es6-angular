
if (!Array.prototype.includes) {
    require('core-js/fn/array/includes');
}

if (typeof Promise === 'undefined') {
    require('core-js/fn/promise');
}
