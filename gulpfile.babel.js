import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import browserSync from 'browser-sync';
import uglify from 'gulp-uglify';
import mocha from 'gulp-mocha';
import eslint from 'gulp-eslint';
import taskListing from 'gulp-task-listing';
import inject from 'gulp-inject';
import copy from 'gulp-contrib-copy';

gulp.task('help', taskListing);

gulp.task('js', () => {
    return gulp.src('src/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(uglify())
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError())
        .pipe(concat('inherito.min.js'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('test', () => {
    return gulp
        .src(['test/**/*.js'])
        .pipe(mocha({
            compilers: {
                js: babel
            },
            reporter: 'nyan'
        }));
});

gulp.task('generate-example', function() {
    gulp.src('example/**/*')
        .pipe(copy())
        .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['js', 'test']);

gulp.task('js-watch', ['js'], browserSync.reload);

gulp.task('serve', ['js', 'generate-example'], () => {

    browserSync({
        server: {
            baseDir: "./dist"
        }
    });

    gulp.watch("src/*.js", ['js-watch']);
});
