const gulp = require('gulp');
const babel = require('gulp-babel');

function buildJS(target, babelPresets = []) {
  gulp.src(['./src/**/*.js', '!./src/**/*.spec.js'])
    .pipe(babel({
      presets: [].concat(['react'], babelPresets),
      plugins: ['transform-object-rest-spread'],
    }))
    .pipe(gulp.dest(target));
}

gulp.task('lib', () => {
  const targetFolder = 'dist/';

  buildJS(targetFolder);
  gulp.src('./src/**/*.scss')
    .pipe(gulp.dest(targetFolder));
});
