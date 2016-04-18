
'use strict';

const gulp = require('gulp');
const lint = require('gulp-eslint');
const webpack = require('gulp-webpack');


let paths = ['*.js', 'test/*.js', 'app/js/*.js', 'app/js/user/*.js', 'app/js/repos/*.js'];

gulp.task('eslint', () => {
  gulp.src(paths)
  .pipe(lint())
  .pipe(lint.format());
});




gulp.task('build:html', () => {
  gulp.src(__dirname + '/app/index.html')
  .pipe(gulp.dest(__dirname + '/app/build'));
});

gulp.task('build:css', () => {
  gulp.src(__dirname + '/app/css/*.css')
  .pipe(gulp.dest(__dirname + '/app/build'));
});

gulp.task('webpack', () => {
  return gulp.src(__dirname + '/app/js/index.js')
  .pipe(webpack({
    watch: true,
    module: {
      loaders: [
        { test: /\.css$/, loader: 'style!css'}
      ]
    },
    output: {
      filename: 'bundle.js'
    }
  }))
  .pipe(gulp.dest(__dirname + '/app/build'));
});

gulp.task('watch', () => {
  gulp.watch(paths);
});

gulp.task('default', ['webpack', 'build:html', 'build:css']);
