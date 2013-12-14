module.exports = function (grunt) {
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-requirejs');

	grunt.initConfig({
		requirejs: {
			compile: {
				options: {
					appDir: "js",
					baseUr: ".",
					dir: "dist",
					paths : {
						"esri" : "empty:",
						"dojo" : "empty:",
						"dojox" : "empty:",
						"dijit" : "empty:",
						"text" : "empty:"
					},
					optimize: "uglify2"
				}
			}
		}
	});

	grunt.registerTask("build", ["requirejs"]);
};