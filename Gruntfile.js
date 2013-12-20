module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-text-replace');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.initConfig({
    requirejs: {
      // configuration for a multi-file build
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
      // configuration for a single-file build
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
            'domReady': '../../deps/domReady/domReady',
            'i18n': '../../deps/i18n/i18n'
          },
          exclude: ['esri', 'dojo', 'dojox', 'dijit', 'text', 'domReady', 'i18n'],
          inlineText: true,
          // NOTE: this does not work
          // locale: "es",
          optimize: 'uglify2'
        }
      },
      // used in single file build to optimize static resources such as css images
      css: {
        options: {
          cssIn: 'src/css/app.css',
          out: 'dist/css/app.css'
        }
      }
    },

    replace: {
      // needed for inlined templated in single-file build
      "main-built": {
        src: ['dist/js/main-built.js'],
        dest: 'dist/js/main-built.js',
        replacements: [{
          from: 'text!',
          to: ''
        }]
      },
      // replace reference to main file for single file build
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

    // needed for single file build
    clean: {
      single: ['dist']
    },

    copy: {
      // needed for single file build
      // r.js doesn't trace background image paths through url()
      single: {
        files: [
          // this doesn't work - dojo loader tries to get from JSAPI
          // 404: http://js.arcgis.com/3.7/js/dojo/app/wijit/nls/es/colors.js
          // {expand: true, cwd: 'src/js/app/wijit/', src:['nls/**'], dest: 'dist/js/app/wijit/'},
          {expand: true, cwd: 'src/js/app/wijit/resources/', src:['img/**'], dest: 'dist/js/app/wijit/resources/'}
        ]
      }
    }
  });

  grunt.registerTask("compile", ["requirejs:compile"]);
  grunt.registerTask("single", ["clean", "requirejs:single", "replace", "requirejs:css", "copy"]);
};
