module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    webfont: {
      icons: {
          src: 'svg/*.svg',
          dest: 'fonts/',
          destCss: 'less/',
          options:{
            htmlDemo : false,
            font: 'potato_icons',
            stylesheet: 'less'
          }
      }
    },
    less: {
      development: {
        files: {
          "stylesheet/potato.css": "less/potato.less"
        }
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-webfont');

  grunt.registerTask('default', ['webfont','less']);
};
