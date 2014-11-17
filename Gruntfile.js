module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js',
                'tests/**/*.js'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        'ot-discovery': {
            'announce': {
                options: {
                    server: '127.0.0.1:8888',
                    action: 'announce'
                }
            },
            'unannounce': {
                options: {
                    server: '127.0.0.1:8888',
                    action: 'unannounce'
                }
            },
            'ignore-errors': {
                options: {
                    server: '127.0.0.1:8888/borked',
                    action: 'announce',
                    ignoreErrors: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.registerTask('test', ['jshint', 'start-server', 'ot-discovery', 'kill-server']);
    grunt.registerTask('default', ['test']);
    grunt.loadTasks('tasks');
    grunt.loadTasks('tests/tasks');
};
