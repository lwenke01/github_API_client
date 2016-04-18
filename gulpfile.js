'use strict';

var gulp = require('gulp');
var webpack = require('gulp-webpack');
var lint = require('gulp-eslint');

var paths = [ '*.js', 'client-server.js','build/*.js', 'build/*.html','app/*.js'];


gulp.task('eslint', function(){
  gulp.src(paths)
  .pipe(lint())
  .pipe(lint.format());
});

gulp.task('build:html', function(){
  gulp.src('app/*.html')
  .pipe(gulp.dest('build/'));
});

gulp.task('build:js', function(){
  return gulp.src(__dirname + '/app/index.js')
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
.pipe(gulp.dest(__dirname + '/build/'));
});

gulp.task('watch',function ()  {
  gulp.watch(paths);
});


gulp.task('default', ['eslint','build:js', 'build:html','watch']);
