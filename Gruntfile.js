module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-text-replace');

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
      },
      single: {
        options: {
          baseUrl: 'js',
          name: 'main',
          out: 'js/main-built.js',
          paths: {
            'esri': 'empty:',
            'dojo': 'empty:',
            'dojox': 'empty:',
            'dijit': 'empty:',
            'text': '../deps/text/text',
            'domReady': '../deps/domReady/domReady'
          },
          exclude: ['esri', 'dojo', 'dojox', 'dijit', 'text', 'domReady'],
          inlineText: true,
          optimize: 'uglify2'
        }
      }
    },

    replace: {
      example: {
        src: ['js/main-built.js'],
        dest: 'js/main-built.js',
        replacements: [{
          from: 'text!',
          to: ''
        }]
      }
    }
  });

  grunt.registerTask("build", ["requirejs:compile"]);
  grunt.registerTask("single", ["requirejs:single", "replace"]);
};
