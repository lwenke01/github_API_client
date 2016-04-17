var gulp = require('gulp');
var webpack = require('webpack-stream');

var paths = [ 'server.js', 'client-server.js','build/*.js', 'build/*.html'];

gulp.task('build:html', function(){
  gulp.src('build/*.html')
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
