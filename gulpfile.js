let gulp = require('gulp');
let autoprefixer = require('gulp-autoprefixer');
let cleanCSS = require('gulp-clean-css');
let rename = require('gulp-rename');
let sass = require('gulp-sass');
let sourcemaps = require('gulp-sourcemaps');
let uglify = require('gulp-uglify-es').default;
let watch = require('gulp-watch');

const sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

gulp.task('sass', function() {
  return gulp
    .src('./public/sass/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer())
    .pipe(rename('style.css'))
    .pipe(gulp.dest('./public/css'))
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('sass-watch', function() {
  return gulp
    .watch(['./public/sass/**/*.scss'], gulp.series('sass'))
    .on('change', function(e) {
      console.log(`Modified the file: ${e} `);
    });
});

gulp.task('minify-js', function() {
  return gulp
    .src(['./public/js/*.js', '!./public/js/*.min.js'])
    .pipe(uglify())
    .pipe(
      rename({
        suffix: '.min'
      })
    )
    .pipe(gulp.dest('./public/js'));
});

gulp.task('minify-js-watch', function() {
  return watch(['./public/js/*.js', '!./public/js/*.min.js'])
    .pipe(uglify())
    .pipe(
      rename({
        suffix: '.min'
      })
    )
    .pipe(gulp.dest('./public/js'));
});
