'use strict';

const gulp = require('gulp');

const move = async () => {
  gulp.src('./src/**/*')
    .pipe(gulp.dest('./lib'));
}

gulp.task('watcher', () => {
  const watcher = gulp.watch('./src/**/*.scss', move);

  watcher.on('change', (ev) => {
    console.log(`File: ${ev.path} was ${ev.type}, moving files.`);
  });
});

gulp.task('default', move);
