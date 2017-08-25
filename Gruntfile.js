module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // Concatenation
    concat: {
      dist: {
        src: [
          'js/bootstrap.js',
          'js/theme.js'
        ],
        dest: 'js/scripts.js'
      }
    },
    // Uglify
    uglify: {
      mini: {
        src: 'js/scripts.js',
        dest: 'js/scripts.min.js'
      },
      build: {
        src: 'js/scripts.js',
        dest: 'js/scripts.min.js'
      }
    },
    // Optimize images
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'images/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'images/build/'
        }]
      }
    },
    // SASS
    sass: {
      dist: {
        options: {
          trace: true,
          style: 'compressed',
          precision: 8
        },
        files: {
          'skin.css': 'sass/skin.scss'
        }
      },
      build: {
        options: {
          trace: true,
          style: 'compressed',
          precision: 8
        },
        files: {
          'build/Skin/skin.css' : 'sass/skin.scss'
        }
      }
    },
    // Autoprefixer
    autoprefixer: {
      dist: {
        files: {
          'skin.css': 'skin.css'
        }
      },
      build: {
        expand: true,
        cwd: 'build',
        src: [ '**/*.css' ],
        dest: 'build'
      }
    },
    // Copy
    copy: {
      build: {
        files: [
          {
            expand: true,
            src: [
              '**',
              '!**/Containers/**',
              '!**/node_modules/**',
              '!**/sass/**',
              '!**/HTML/**',
              '!**/content-templates/**',
              '!**/*.scss',
              '!**/images/sources/**',
              '!.gitignore',
              '!.jshintignore',
              '!.jscsrc',
              '!_jshintignore',
              '!_jscsrc',
              '!.gitignore',
              '!Gruntfile.js',
              '!LICENSE',
              '!package.json',
              '!README.md',
              '!*.dnn',
              '!License.txt',
              '!ReleastNotes.txt',
              '!LICENCE',
              '!README.md',
              '!.sass-cache/',
              '!*.map'
            ],
            dest: 'build/Skin/'
          },
          {
            expand: true,
            src: [
              '**/Containers/**',
              '*.dnn',
              'License.txt',
              'ReleaseNotes.txt',
            ],
            dest: 'build/'
          },
        ],
      },
    },
    // Zip
    compress: {
      build_skin: {
        options: {
          archive: 'build/Skin.zip'
        },
        files: [
          {
            expand: true,
            cwd: 'build/Skin/',
            src: [ '**' ]
          },
        ],
      },
      build_containers: {
        options: {
          archive: 'build/Containers.zip'
        },
        files: [
          {
            expand: true,
            cwd: 'build/Containers/',
            src: [ '**' ]
          },
        ],
      },
      build_installation: {
        options: {
          archive: 'build/Name-of-theme-Install.zip'
        },
        files: [
          {
            expand: true,
            cwd: 'build/',
            src: [ '*' ],
            filter: 'isFile'
          },
        ],
      },
    },
    // Clean
    clean: {
      build: {
        src: [ 'build' ]
      },
      stylesheets: {
        src: [ 'build/*.css' ]
      },
      scripts: {
        src: [ 'build/**/*.js', '!build/**/scripts.js' ]
      },
      templates: {
        src: [ 'build/**/*', '!build/Name-of-theme-Install.zip', ]
      },
    },
    // Watch
    watch: {
      options: {
        livereload: true
      },
      ascx: {
        files: ['*.ascx', '**/*.ascx'],
        options: {
          spawn: false
        }
      },
      html: {
        files: ['*.html', '*.cshtml', '**/*.html', '**/*.cshtml'],
        options: {
          spawn: false
        }
      },
      images: {
        files: ['**/*.{png,jpg,gif,svg}'],
        options: {
          spawn: false
        }
      },
      scripts: {
        files: ['js/*.js'],
        tasks: ['concat'],
        options: {
          spawn: false
        }
      },
      sass: {
        files: ['sass/*.scss', 'sass/theme/*.scss'],
        tasks: ['sass:dist'],
        options: {
          spawn: false
        }
      },
      css: {
        files: ['style.css'],
        tasks: ['autoprefixer:dist']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Register tasks
  grunt.registerTask('default', 'watch');
  grunt.registerTask(
    'stylesheets',
    'Compiles the stylesheets',
    [ 'sass:build', 'autoprefixer:build', 'clean:stylesheets' ]
  );
  grunt.registerTask(
    'templates',
    'Compiles the resource files',
    [ 'clean:templates' ]
  );
  grunt.registerTask(
    'scripts',
    'Compiles the JavaScript files',
    [ 'clean:scripts' ]
  );
  grunt.registerTask(
    'build',
    'Compiles all of the assets and copies the files to the build directory',
    [ 'clean:build', 'copy', 'stylesheets', 'scripts', 'compress', 'templates' ]);
};
