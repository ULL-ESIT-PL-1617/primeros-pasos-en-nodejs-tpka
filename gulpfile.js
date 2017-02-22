var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var shell = require('gulp-shell');
var task = require('shell-task');
var wiki = require('./package.json').repository.wiki;

gulp.task('deploy', function() {
      return gulp.src('./txt/**/*')
        .pipe(ghPages());
});
gulp.task('wiki', function() {
	return gulp.src('').pipe(shell(['./scripts/losh generate-wiki']));
});
gulp.task('serve', function() {
	return gulp.src('').pipe(shell(['gitbook serve --port 43210 `pwd` gh-pages']));
}); 
gulp.task('deploygh', function() {
        return gulp.src('').pipe(shell(['node ./scripts/deploy-gh-pages']))
});
gulp.task('build', function() {
        return gulp.src('').pipe(shell(['gitbook build ./txt ./gh-pages']));
});
gulp.task('buildwiki', function() {
        return gulp.src('').pipe(shell(['node ./scripts/generate-wiki.js']));
});

gulp.task('deploywiki', function() {
  return gulp.src('').pipe(shell([
      'cd wiki',
      'rm -rf .git',
      'git init',
      'git add .',
      'git commit -m "Deploy to Wiki"',
      'git remote add wiki https://github.com/ULL-ESIT-PL-1617/primeros-pasos-en-nodejs-tpka.wiki.git',
      'git push wiki master --force'
  ]));
});

gulp.task('serve', function() {
        return gulp.src('').pipe(shell(['gitbook serve —port 43210 pwd gh-pages']));
});

