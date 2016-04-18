'use strict';

var gulp = require('gulp');
var webpack = require('gulp-webpack');

var paths = [ 'app/js/index.js', 'client-server.js','build/*.js', 'app/*.html'];

gulp.task('build:html', function(){
  gulp.src('app/*.html')
  .pipe(gulp.dest('build/'));
});

gulp.task('build:js', function(){
  return gulp.src('app/index.js')
.pipe(webpack({
  output: {
    filename: 'bundle.js'
  }
}))
.pipe(gulp.dest('build/'));
});

gulp.task('watch:html', function (){
  gulp.watch(paths.html, ['build:html']);
});

gulp.task('watch:js', function (){
  gulp.watch(paths.js, ['build:js']);
});

gulp.task('default', ['build:js', 'build:html','watch:js', 'watch:html']);
