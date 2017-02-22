
var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var shell = require('gulp-shell');

gulp.task('deploy', function() {
      return gulp.src('./txt/**/*')
        .pipe(ghPages());
});
gulp.task('build', function() {
	return gulp.src('').pipe(shell(['./scripts/losh generate-gitbook']));
});
gulp.task('wiki', function() {
	return gulp.src('').pipe(shell(['./scripts/losh generate-wiki']));
});
gulp.task('serve', function() {
	return gulp.src('').pipe(shell(['gitbook serve --port 43210 `pwd` gh-pages']));
}); 
