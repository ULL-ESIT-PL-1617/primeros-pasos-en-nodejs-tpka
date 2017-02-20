
var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var shell = require('gulp-shell');
 

gulp.task('build', shell.task( 'gitbook build ./txt'));
gulp.task('deploygb', shell.task( 'git push gitbook gh-pages'));

gulp.task('deploygh', [ 'build'], function() {
  return gulp.src('./_book/**/*')
    .pipe(ghPages());
});
