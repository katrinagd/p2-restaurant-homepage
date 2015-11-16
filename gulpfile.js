'use strict';

var gulp = require('gulp'); // Load Gulp!
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch(["index.html", "js/*.js", "css/*.css"]).on('change', browserSync.reload);
});