const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');

function buildJS(target, babelPresets = []) {
  gulp.src('./src/**/*.js')
    .pipe(babel({
      presets: [].concat(['react'], babelPresets),
      plugins: ['transform-object-rest-spread'],
    }))
    .pipe(gulp.dest(target));
}

gulp.task('lib', () => {
  const targetFolder = 'dist/lib';

  buildJS(targetFolder);
  gulp.src('./src/**/*.scss')
    .pipe(gulp.dest(targetFolder));
});

gulp.task('nextjs', () => {
  const targetFolder = 'dist/nextjs';

  buildJS(targetFolder, ['env']);
  gulp.src('./src/**/*.scss')
    .pipe(sass({ includePaths: ['node_modules'] }).on('error', sass.logError))
    .pipe(gulp.dest(targetFolder));
});
