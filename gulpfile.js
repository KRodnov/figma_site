"use strict";

var gulp = require ('gulp');
var saas = require ('gulp-sass');

gulp.task("css",function () {
    return gulp.src("saas/style.scss")
        .pipe(sass())
        .pipe(gulp.dest("build/css"));
});