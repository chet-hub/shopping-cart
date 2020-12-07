const {src, dest, series, parallel,watch} = require('gulp');
const del = require('delete');
const sourcemaps = require('gulp-sourcemaps');
const cleanCSS = require('gulp-clean-css');
const imagemin   = require('gulp-imagemin');
const minify = require('gulp-minify');
var postcss = require('gulp-postcss');

function clean(cb) {
    del(['./dist/'])
    cb()
}

function cssMinify(cb) {
    src("./src/css/*.css")
        .pipe(sourcemaps.init())
        .pipe(cleanCSS())
        // .pipe(postcss())
        .pipe(sourcemaps.write('./maps'))
        .pipe(dest("./dist/css"))
    cb()
}

function imagesMinify(cb) {
    src("./src/images/*")
        .pipe(imagemin())
        .pipe(dest("./dist/images"))
    cb()
}

function javascript(cb) {
    src('./src/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(minify())
        .pipe(sourcemaps.write('./maps'))
        .pipe(dest('./dist'));
    cb()
}

function html(cb){
    src('./src/*.html').pipe(dest('./dist'));
    cb();
}


// exports.build = ;
exports.default = series(clean,parallel(javascript,imagesMinify,cssMinify),html)
