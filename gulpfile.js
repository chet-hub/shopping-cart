const {src, dest, series, parallel,watch} = require('gulp');
const del = require('delete');
const sourcemaps = require('gulp-sourcemaps');
const cleanCSS = require('gulp-clean-css');
const imagemin   = require('gulp-imagemin');
const minify = require('gulp-minify');
const concatCss = require('gulp-concat-css');
const htmlreplace = require('gulp-html-replace');
const concat = require('gulp-concat');

function clean(cb) {
    del(['./dist/'],cb)
}

function cssMinify(cb) {
    src("./src/css/*.css")
        .pipe(concatCss("./bundle.css"))
        .pipe(cleanCSS())
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
        .pipe(concat('js/bundle.js'))
        .pipe(minify())
        .pipe(sourcemaps.write('./map'))
        .pipe(dest('./dist'));
    cb()
}

function html(cb){
    src('./src/index.html')
        .pipe(htmlreplace({
            'css': 'css/bundle.css',
            'js': 'js/bundle.js'
        }))
        .pipe(dest('./dist'));
    cb();
}


// exports.build = ;
exports.default = series(clean,parallel(javascript,imagesMinify,cssMinify),html)
