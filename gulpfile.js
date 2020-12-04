// const {src, dest, series, parallel,watch} = require('gulp');
// const del = require('delete');
// const sourcemaps = require('gulp-sourcemaps');
// const imagemin   = require('gulp-imagemin');
// const minify = require('gulp-minify');
//
// function clean() {
//     del(['dest/'])
// }
//
//
// function cssMinify() {
//     src("src/css/*.css")
//         .pipe()
//         .pipe(dest("dest/"))
// }

// function jsMinify() {
//     src("src/js/*.js")
//         .pipe(sourcemaps.init())
//         .pipe(minify())
//         .pipe(sourcemaps.write('../maps'))
//         .pipe(dest("dest/"))
// }
//
// function imagesMinify() {
//     src("src/images/*")
//         .pipe(imagemin())
//         .pipe(dest("dest/"))
// }


function defaultTask(cb) {
    // place code for your default task here
    cb();
}

exports.default = defaultTask
