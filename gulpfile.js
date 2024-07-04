const { src, dest, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglifyJS = require('gulp-uglify');
const sourceMapas = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');

function compilacss() {
    return src('./source/**/main.scss')
        .pipe(sass({
            outputStyle: "compressed"
        }).on('error', sass.logError))
        .pipe(dest('./build/styles'));
}

function compilauglify() {
    return src('./source/script/*.js')
        .pipe(sourceMapas.init())
        .pipe(uglifyJS())
        .pipe(sourceMapas.write())
        .pipe(dest('./build/script'));
}

function minificaImagens() {
    return src('./source/assets/*')
        .pipe(imagemin())
        .pipe(dest('./build/assets'));
}

exports.default = series(compilacss, compilauglify, minificaImagens);