'use strict';
var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var del = require('del');

gulp.task('script-dev', function() {
  return gulp.src('src/richEditor.js')
    .pipe(gulp.dest('dist/'));
});

gulp.task('script-prod', function() {
  return gulp.src('src/richEditor.js')
    .pipe(uglify())
    .pipe(rename('richEditor.min.js'))
    .pipe(gulp.dest('dist/'));
});

gulp.task('style-dev', function() {
  return gulp.src('src/richEditor.css')
    .pipe(gulp.dest('dist/'));
});

gulp.task('style-prod', function() {
  return gulp.src('src/richEditor.css')
    .pipe(minifyCss())
    .pipe(rename('richEditor.min.css'))
    .pipe(gulp.dest('dist/'));
});

gulp.task('clean', function() {
  return del(['dist/*']);
});

gulp.task('watch', function() {
  gulp.watch('src/richEditor.js', ['script-dev']);
  gulp.watch('src/richEditor.css', ['style-dev']);
});

gulp.task('default', ['style-dev','script-dev','watch']);

// gulp.task('prod', ['clean','style-prod','script-prod']);
gulp.task('prod', ['clean','style-dev','script-dev','style-prod','script-prod']);