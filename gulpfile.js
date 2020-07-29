'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');

 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('./assets/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./assets/scss/**/*.scss', gulp.series('sass', 'minify-css'));
});

 
gulp.task('minify-css', () => {
  return gulp.src('./assets/css/main.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./assets/css'));
});