var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var shell = require('gulp-shell');

gulp.task('deploy', function() {
      return gulp.src('./txt/**/*')
        .pipe(ghPages());
});

gulp.task('deploygh', function() {
        return gulp.src('').pipe(shell(['node ./scripts/deploy-gh-pages']))
});
gulp.task('build', function() {
        return gulp.src('').pipe(shell(['gitbook build ./txt ./gh-pages']));
});
gulp.task('wiki', function() {
        return gulp.src('').pipe(shell(['node ./scripts/generate-wiki.js']));
});
gulp.task('serve', function() {
        return gulp.src('').pipe(shell(['gitbook serve —port 43210 pwd gh-pages']));
});
