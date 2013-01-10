/*
 * Copyright 2012 Amadeus s.a.s.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = function (grunt) {
    grunt.initConfig({
        lint: {
            sources: ['package.json', 'grunt.js', 'lib/**/*.js', 'spec/**/*.spec.js']
        },
        jshint: {
            options: {
                eqnull: true
            }
        },
        watch: {
            files: ['<config:lint.sources>'],
            tasks: ['dev']
        },
        jasmine_node: {
            forceExit: true
        },
        beautify: {
            all: ['<config:lint.sources>']
        },
        beautifier: {
            options: {
                indentSize: 4,
                indentChar: ' ',
                endOfLineNormalization: true
            }
        }
    });

    grunt.loadNpmTasks("grunt-jasmine-node");
    grunt.loadNpmTasks('grunt-beautify');
    grunt.registerTask('test', 'lint jasmine_node');
    grunt.registerTask('dev', 'beautify lint');
    grunt.registerTask('default', 'test');

};