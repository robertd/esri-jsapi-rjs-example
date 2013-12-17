module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-text-replace');

  grunt.initConfig({
    requirejs: {
      compile: {
        options: {
          baseUrl: '.',
          appDir: 'src',
          dir: 'dist',
          paths: {
            'esri': 'empty:',
            'dojo': 'empty:',
            'dojox': 'empty:',
            'dijit': 'empty:'
          },
          optimize: 'uglify2'
        }
      },
      single: {
        options: {
          baseUrl: 'src/js',
          name: 'main',
          out: 'dist/js/main-built.js',
          paths: {
            'esri': 'empty:',
            'dojo': 'empty:',
            'dojox': 'empty:',
            'dijit': 'empty:',
            'text': '../../deps/text/text',
            'domReady': '../../deps/domReady/domReady'
          },
          exclude: ['esri', 'dojo', 'dojox', 'dijit', 'text', 'domReady'],
          inlineText: true,
          optimize: 'uglify2'
        }
      }
    },

    replace: {
      "main-built": {
        src: ['dist/js/main-built.js'],
        dest: 'dist/js/main-built.js',
        replacements: [{
          from: 'text!',
          to: ''
        }]
      },
      index: {
        src: ['src/index.html'],
        dest: 'dist/index.html',
        replacements: [{
          from: 'js/main.js',
          to: 'js/main-built.js'
        },
        {
          from: '{ name: "app",',
          to: '// { name: "app",'
        }]
      }
    },

    clean: {
      single: ['dist']
    }
  });

  grunt.registerTask("compile", ["requirejs:compile"]);
  grunt.registerTask("single", ["clean", "requirejs:single", "replace"]);
};
