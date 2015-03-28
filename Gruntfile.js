/*global module:false*/
module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		meta: {
			banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
				'<%= grunt.template.today("yyyy-mm-dd") + "\\n" %>' +
				'<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
				'* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
				' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n\n'
		},

		uglify: {
			options: {
				// the banner is inserted at the top of the output
				banner: "<%= meta.banner %>"
		 	},
			dist: {
				files: {
					'dist/<%= pkg.name %>.min.js': [ '<%= pkg.name %>.js' ]
				}
			}
		},
	});

	// Dependencies
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// Default task.
	grunt.registerTask('default', 'uglify');
	// grunt.registerTask('deploy', ['uglify', 'concat']);
};
