const { src, dest, series } = require('gulp');

const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');

function js() {
	return src('src/js/*.js')
		.pipe(babel())
		.pipe(uglify())
		.pipe(concat('index-min.js'))
		.pipe(dest('build/'));
}

function css() {
	return src('src/scss/*.scss')
		.pipe(sass())
		.pipe(concat('style.css'))
		.pipe(dest('build/'));
}

exports.default = series(js, css);