## How to involve external library ##

```bash
npm install --save <external library>
```

Open `js/fw/ext/main.js`, `import` it, and append the module name to `export` array if provided.

## Why Dependency Injection looks so weird in this skeleton ##

This is because [ng-annotate](https://github.com/olov/ng-annotate) is chosen for for providing quick DI.

## How to add new route ##

You will find a `Routes.js` in each "feature" folder, it's an `Array` to be exported, and each `object` in it is used to describe a `Route`.

You can easily append more to an exist `feature`, or add a new `feature` with route.

## Why `main.js` exist in each folder ##

The `main.js` in each folder takes the responsibility for managing all modules in that folder, according to such concept, it's more robust to extend functionality without modifying other features.

## How to use jquery ##

```bash
npm install --save jquery
```

If you'd like to add [jquery](http://jquery.com/) as replacement of `jqLite`, you have to modify the `webpack.config.dev.js` and `webpack.config.prod.js` with following plugin added:

```javascript
new webpack.ProvidePlugin({
    $: 'jquery',
    'window.jQuery': 'jquery'
}),
```

>This is because `AngularJS` internally check if `window.jQuery` provided


## References ##

1. [yeoman](http://yeoman.io/)
2. [webpack](http://webpack.github.io/)
3. [es6-features](https://github.com/lukehoban/es6features)
4. [angular](https://angularjs.org/)
