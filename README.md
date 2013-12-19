esri-jsapi-rjs-example
======================
This repository is an example of 2 different ways to use [r.js](http://requirejs.org/docs/optimization.html) to build the source code of applications that use the [ArcGIS API for JavaScript](https://developers.arcgis.com/en/javascript/)*:
  1. **Multi-file**: create minified copies of each of the JavaScript files and related resources (templates, CSS, images, etc)
  2. **Single-file**: create a single file which contains the minified JavaScript along with templates inlined as strings


*Only the application's local files will be inlcuded in the build output. No Esri or Dojo AMD modules will be included. The output application will still need a script tag that references the Dojo loader inlcuded in Esri's CDN copy of the JSAPI.

**NOTE: this is still more of an experiment than a boilerplate that can be used in production applications. See the [Potential Issues](#potential-issues) section below**

## Running the Examples
1. [Fork and clone the repo](https://help.github.com/articles/fork-a-repo)
2. `cd` into the `esri-jsapi-rjs-example` folder
4. Run `git submodule init` and `git submodule update`
5. Instal the dependancies with `npm install`
6. Run a Grunt build with one of the following options:
  * `grunt compile` to minify each AMD module into it's own file
  * `grunt single` to build a single file that contains all the minified AMD modules and their templates as inlined text
7. Inspect and/or browse to the contents to of the `dist` folder

## How It Works
[r.js](http://requirejs.org/docs/optimization.html) is the AMD optimizer for [RequireJS](http://requirejs.org/), and @robertd got it working for basic Dojo AMD modules, but there's always been issues with modules that use plugins (such as dojo/text to pull in template files).

@odoe figured out how to use the [RequireJS](http://requirejs.org/) plugins during the build process but use the Dojo plugins at runtime by:
  1. Including the requireJS text/domReady plugins in the project (as git submodules in this case)
  2. Referencing the above plugins in all modules by replacing `dojo/text` and `dojo/domReady` with `text` and `domReady`
  3. Adding aliases to the Dojo config to point the above reference back to the Dojo plugins as follows:
```
aliases: [['text', 'dojo/text'], ['domReady', 'dojo/domReady']]
```

The above worked for a multi-file build, but there were still issues with inlining text (templates) when creating a single-file build. @odoe figured out how to do a quick find and replace on the built file using `grunt-contrib-text-replace` that enabled the Dojo loader to load the built templates.

NOTE: Whenever there is more than one way to accomplish a build step, the examples in this repo give preference to doing things the r.js way. For example, it's possible to use `grunt-contrib-cssmin` to minify and concatenate CSS files, but the examples in this repo let r.js do it (using `cssIn` in the case of the single-file build).

## Potential Issues
Other Dojo plugins like `i18n` and `has` have not been tested and it is likely that they will cause build issues.

## License

Copyright (c) 2013 Robert Djurasaj

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.