# generator-es6-angular
==================

[![NPM version][npm-image]][npm-url]
![][david-url]

Yeoman generator for es6 based angular skeleton with webpack


> You can view the online demo at: [http://leftstick.github.io/generator-es6-angular](http://leftstick.github.io/generator-es6-angular)


## Usage ##

Install `yo`: `npm install -g yo`

Install `gulp`: `npm install -g gulp`

Install `bower`: `npm install -g bower`

Install `sero`: `npm install -g sero-cli`

Install generator: `npm install -g generator-es6-angular`

Run: `yo es6-angular`

> Give the answers that `generator` required

## How to debug your app ##

Once the project generated, move into the created directory with the given `name`.

Run `gulp dev` to start a debug web server for current working directory.

Open [http://localhost:8080/webpack-dev-server/index.html](http://localhost:8080/webpack-dev-server/index.html), and have fun.


## How to release your app ##

Run `gulp webpack` to compile all the source code into webpack bundles.

And run `sero`, then choose the second item `Start a static web server for current working directory` from launched UI to start a static server(all options can be left with default value). 

Open [http://localhost:8080](http://localhost:8080) to watch the released version

[npm-url]: https://npmjs.org/package/generator-es6-angular
[npm-image]: https://badge.fury.io/js/generator-es6-angular.png
[david-url]: https://david-dm.org/leftstick/generator-es6-angular.png