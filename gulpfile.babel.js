'use strict';

import gulp from 'gulp';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import nunjucks from 'gulp-nunjucks';

const dirs = {
  src: './src',
  dest: './docs'
};

const paths = {
  sassSrc: `${dirs.src}/sass/master.scss`,
  sassWatch: `${dirs.src}/sass/**/*.scss`,
  cssDist: `${dirs.dest}/assets/style/`,
  htmlSrc: `${dirs.src}/views/index.html`,
  htmlDist: `${dirs.dest}/`,
  htmlWatch: `${dirs.src}/views/**/*.html`,
};

gulp.task('sass', () => {
  gulp.src(paths.sassSrc)
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest(paths.cssDist));
});

gulp.task('views', () =>
  gulp.src(paths.htmlSrc)
    .pipe(nunjucks.compile())
    .pipe(gulp.dest(paths.htmlDist))
);

gulp.task('watch', () => {
  gulp.watch(
    [
      paths.sassWatch,
      paths.htmlWatch
    ],
    [
      'sass',
      'views'
    ]
  );
});

