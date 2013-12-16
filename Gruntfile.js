module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    grunt.initConfig({
      requirejs: {
        compile: {
          options: {
            baseUrl: '.',
            appDir: 'js/',
            dir: 'dist',
            paths: {
              'esri': 'empty:',
              'dojo': 'empty:',
              'dojox': 'empty:',
              'dijit': 'empty:'
            },
            inlineText: true,
            optimize: 'uglify2'
          }
        }
      }
    });

    grunt.registerTask("build", ["requirejs"]);
};