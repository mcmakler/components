'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const chalk = require('chalk');
const { log, error } = console; // thanks Tejas

gulp.task('transpile', () => {
  log(chalk.magenta('Transpiling SCSS files'));

  gulp.src('./src/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('move', () => {
  log(chalk.magenta('Moving SCSS files to lib/'))

  gulp.src('./src/**/*')
    .pipe(gulp.dest('./lib'));
});

gulp.task('default', ['move']);
