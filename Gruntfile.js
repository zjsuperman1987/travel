module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        uglify: {
            lib_target: {
                files: [{
                    expand: true,
                    src: ['lib/jquery/**.js', 'lib/bootstrap/**/*.js'],
                    dest: 'dest/'
                }]
            },
            script_target: {
                files: [{
                    expand: true,
                    src: 'scripts/**.js',
                    dest: 'dest/'
                }]
            },
            style_target: {
                files: [{
                    expand: true,
                    src: 'styles/**.css',
                    dest: 'dest/'
                }]
            }
        },
        image: {
            dynamic: {
                files: [{
                    expand: true,
                    src: ['images/**/*.{png,jpg,gif,svg}'],
                    dest: 'dest/'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-image');
    grunt.registerTask('default', ['uglify', 'image']);

};