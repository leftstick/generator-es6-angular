# generator-es6-angular
==================

[![NPM version][npm-image]][npm-url]
![][david-url]

Yeoman generator for es6 based angular skeleton with webpack


> You can view the online demo at: [http://leftstick.github.io/generator-es6-angular](http://leftstick.github.io/generator-es6-angular)


## Prerequisites ##

1. Install [yeoman](http://yeoman.io/): `npm install -g yo`
2. Install [gulp](http://gulpjs.com/): `npm install -g gulp`
3. Install __this__: `npm install -g generator-es6-angular`

## Use `generator-es6-angular` ##

`yo es6-angular`

> Answer questions as following demonstrated

![](https://raw.githubusercontent.com/leftstick/generator-es6-angular/master/docs/img/questions.png)

And then, the [es6](https://github.com/lukehoban/es6features) based project generated.

## Debug your app ##

The full featured `gulp` and `webpack` are embedded, it's easy to start debugging your app.

Just move into the created directory with the given `project name`.

Run `gulp dev` to start a debug web server for current working directory.

Open [http://localhost:8080/webpack-dev-server/index.html](http://localhost:8080/webpack-dev-server/index.html), and have fun.


## Release your app ##

Move the root of the created project.

Run `gulp release` to compile all the source code into webpack bundles. And all required resources are generated into `{root}/build/`.

You can copy the `build` folder to anywhere you like, it's the released app.

### Like have a try with the released app? ###

Install [sero-cli](https://github.com/leftstick/Sero-cli): `npm install -g sero-cli`

Move into `{root}/build/`

Run `sero`. An terminal-UI launched

Then choose the second item `Start a static web server for current working directory` from launched UI to start a static server(all options can be left with default value). 

Open [http://localhost:8080](http://localhost:8080) to watch the released version


## References ##

1. [yeoman](http://yeoman.io/)
2. [gulp](http://gulpjs.com/)
3. [es6-features](https://github.com/lukehoban/es6features)
4. [angular](https://angularjs.org/)


## LICENSE ##

[MIT License](https://raw.githubusercontent.com/leftstick/generator-es6-angular/master/LICENSE)




[npm-url]: https://npmjs.org/package/generator-es6-angular
[npm-image]: https://badge.fury.io/js/generator-es6-angular.png
[david-url]: https://david-dm.org/leftstick/generator-es6-angular.png