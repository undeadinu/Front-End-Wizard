'use strict';

import gulp from 'gulp';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import concat from 'gulp-concat';

const dirs = {
  src: './src',
  dest: './docs'
};

const paths = {
  sassSrc: `${dirs.src}/sass/master.scss`,
  sassWatch: `${dirs.src}/sass/**/*.scss`,
  cssDist: `${dirs.dest}/assets/style/`,
  jsSrc: [
    `${dirs.src}/scripts/search.js`
  ],
  jsWatch: `${dirs.src}/scripts/**/*.js`,
  jsDist: `${dirs.dest}/assets/scripts/`
};

gulp.task('sass', () => {
  return gulp.src(paths.sassSrc)
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest(paths.cssDist));
});

gulp.task('scripts', () => {
  return gulp.src(paths.jsSrc)
  .pipe(concat('master.js'))
  .pipe(gulp.dest(paths.jsDist));
});

gulp.task('watch', () => {
  gulp.watch([paths.sassWatch, paths.jsWatch], ['sass', 'scripts']);
});

