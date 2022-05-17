const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
 
gulp.task('minify', () => {
  return gulp.src('src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
});

gulp.task('fonts', () => {
    return gulp.src('src/fonts/**/*')
      .pipe(gulp.dest('dist/fonts'));
});

gulp.task('mailer', () => {
    return gulp.src('src/mailer/**/*')
      .pipe(gulp.dest('dist/mailer'));
});

gulp.task('icons', () => {
    return gulp.src('src/icons/**/*')
      .pipe(gulp.dest('dist/icons'));
});

gulp.task('scripts', () => {
    return gulp.src('src/js/**/*')
      .pipe(gulp.dest('dist/js'));
});

