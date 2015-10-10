const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const browserSync = require('browser-sync');
const uglify = require('gulp-uglify');
const mocha = require('gulp-mocha');
const eslint = require('gulp-eslint');

gulp.task('js', () => {
    return gulp.src('src/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(uglify())
        .pipe(concat('inherito.min.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('test',function () {
  return gulp
        .src(['test/**/*.js'])
        .pipe(mocha({
            compilers: {
                js: babel
            },
            reporter: 'nyan'
        }))
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('default', ['js', 'test']);

gulp.task('js-watch', ['js'], browserSync.reload);

gulp.task('serve', ['js'], function () {

    browserSync({
        server: {
            baseDir: "./dist"
        }
    });

    gulp.watch("src/*.js", ['js-watch']);
});
