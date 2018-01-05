var gulp   = require('gulp'),
    rename = require('gulp-rename'),
    cssmin = require('gulp-cssmin'),
    less   = require('gulp-less');

var paths = {
  lessSource: ['public/less/import.less'],
  watchCss: [
    'public/less/*.less',
    'public/**/*.less'
  ]
};

gulp.task('runless', function() {
  return gulp.src(paths.lessSource)
    .pipe(less())
    .pipe(rename('main.css'))
    .pipe(gulp.dest('public/stylesheets/origin'));
});

gulp.task('cssmin', ['runless'], function() {
  gulp.src('public/stylesheets/origin/main.css')
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('public/stylesheets/dist'));
});

gulp.task('watch', function() {
  return gulp.watch(paths.watchCss, ['runless', 'cssmin']);
});
