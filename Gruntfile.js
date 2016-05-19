module.exports = function(grunt){

	grunt.initConfig({
		less: {
			development: {
				options: {
					paths: ["css/"]
				},
				files: {
					"css/main.css": "css/main.less"
				}
			}
		},
		cssmin: {
			target: {
				files: [{
					expand: true,
					cwd: 'css',
					src: ['*.css', '!*.min.css'],
					dest: 'css',
					ext: '.min.css'
				}]
			}
		},
		jshint: {
			all: {
				src: 'js/*.js',
				options: {
					expr: true,
					sub: true,
					loopfunc: true
				}
      }
		},
		watch: {
			jshint: {
				files: ['js/*.js'],
				tasks: ['jshint']
			},
			less: {
				files: 'css/*.less',
				tasks: ['less', 'cssmin']
			}
		},
		concat_css: {
			options: {},
			all: {
				src: ['css/normalize.min.css', 'css/main.min.css'],
				dest: "css/build.css"
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-concat-css');
	
	grunt.registerTask('up', ['watch']);
	grunt.registerTask('build', ['concat_css']);
};