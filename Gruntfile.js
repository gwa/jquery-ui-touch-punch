module.exports = function(grunt) {
    grunt.initConfig({

        jshint: {
            options: {
                immed: false,
                latedef: false,
                browser: true,
                eqeqeq: false
            },
            files: ['jquery.ui.touch-punch.js']
        },

        uglify: {
            dist : {
                src : ["jquery.ui.touch-punch.js"],
                dest : "jquery.ui.touch-punch.min.js"
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['jshint', 'uglify']);
};
