module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			files: ['Gruntfile.js', 'app/ng-app/*.js', 'app/ng-app/**/*.js'],
			options: {
				// options here to override JSHint defaults
				eqeqeq: true,
				indent: 4,
				latedef: true,
				unused: true,
				globals: {
					jQuery: true,
					console: true,
					module: true,
					document: true
				}
			}
		},
		coffee: {
			glob_to_multiple:{
			    expand: true,
			    flatten: true,
			    cwd: 'app/ng-app/coffee/blogg',
			    src: ['*.coffee'],
			    dest: 'app/ng-app/blogg/',
			    ext: '.js'				
			}
    	},
  		watch: {
			options: {
				livereload: true
			},
			files: ['<%= jshint.files %>', 'app/**/*.*', 'app/ng-app/*.*'],
			tasks: ['test']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-coffee');

	grunt.registerTask('test', ['jshint']);

	grunt.registerTask('serve', ['jshint', 'watch']);

};
