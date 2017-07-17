module.exports = function(grunt) {

  require("load-grunt-tasks")(grunt);

  grunt.initConfig({
    babel: {
        options: {
            sourceMap: true,
            presets: ['es2015']
        },
        dist: {
            files: {
                "converted.js": "main.js"
            }
        }
    }
  });

  grunt.loadNpmTasks('babel');
  grunt.registerTask('default', ['babel']);
};