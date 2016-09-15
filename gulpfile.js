const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');

let files = [
    'assets/js/javascript.min.js',
    'assets/js/modernizr.js',
    'assets/js/gauge.min.js',
    'assets/js/slick.min.js',
    'assets/js/prettify.js',
    'assets/js/code-sample.js'
];

gulp.task('build', done => {
    gulp.src(files)
        .pipe(sourcemaps.init())
        .pipe(concat('bundle.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('assets/js'))
        .on('end', () => done());
});

gulp.task('watch', ['build'], () => {
    gulp.watch(files, () => gulp.start('build'));
});

gulp.task('default', ['build']);
