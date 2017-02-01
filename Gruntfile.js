'use strict';
module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'assets/js/*.js',
        'assets/js/plugins/*.js',
        'node_modules/jquery/dist/jquery.js',
        'node_modules/bootstrap/dist/js/bootstrap.js',
        'node_modules/imagesloaded/imagesloaded.pkgd.js',
        'node_modules/skrollr/src/skrollr.js',
        'node_modules/enquire.js/dist/enquire.js',
        'node_modules/masonry-layout/dist/masonry.pkgd.js',
        '!assets/js/scripts.min.js'
      ]
    },
    uglify: {
      dist: {
        files: {
          'assets/js/scripts.min.js': [
            'node_modules/jquery/dist/jquery.js',
            'node_modules/bootstrap/dist/js/bootstrap.js',
            'node_modules/imagesloaded/imagesloaded.pkgd.js',
            'node_modules/skrollr/src/skrollr.js',
            'node_modules/enquire.js/dist/enquire.js',
            'node_modules/masonry-layout/dist/masonry.pkgd.js',
            'assets/js/plugins/*.js',
            'assets/js/_*.js'
          ]
        }
      }
    },
    watch: {
      js: {
        files: [
          '<%= jshint.all %>'
        ],
        tasks: ['uglify']
      }
    },
    clean: {
      dist: [
        'assets/js/scripts.min.js'
      ]
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Register tasks
  grunt.registerTask('default', [
    'clean',
    'uglify'
  ]);
  grunt.registerTask('dev', [
    'watch'
  ]);

};