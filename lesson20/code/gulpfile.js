// const gulp = require("gulp");
//
// gulp.task("sayHello", async () => {
//   console.log("hello custom gulp");
// });
//
// gulp.task("default", async () => {
//   console.log("hello default gulp");
// });

/****************************************
 * compose
 ****************************************/

// const { parallel, series } = require("gulp");

// function foo(cb) {
//   console.log('foo')
//   cb()
// }
//
// function bar(cb) {
//   console.log('bar')
//   cb()
// }
//
// exports.build = series(foo, bar);
// exports.default = parallel(foo, bar);

// function clean(cb) {
//   console.log('Cleaning...')
//   cb()
// }
//
// function cssCompilation(cb) {
//   console.log('css compile...')
//   cb()
// }
//
// function cssMinify(cb) {
//   console.log('css minify...')
//   cb()
// }
//
// function jsTranspile(cb) {
//   console.log('js transp...')
//   cb()
// }
//
// function jsMinify(cb) {
//   console.log('js minify...')
//   cb()
// }
//
// function publish(cb) {
//   console.log('publish it')
//   cb()
// }
//
// exports.build = series(
//     clean,
//     parallel( cssCompilation, cssMinify),
//     parallel( jsTranspile, jsMinify ),
//     publish
// )

/****************************************
 * plugins
 ****************************************/

// const { src, dest } = require("gulp");
// const uglify = require("gulp-uglify");
// const rename = require("gulp-rename");
//
// const path = "app/js";
//
// exports.default = function () {
//   return src(`${path}/*.js`)
//     .pipe(uglify())
//     .pipe(rename({ extname: ".min.js" }))
//     .pipe(dest("dist/"));
// };

/****************************************
 *
 ****************************************/
// const { src, dest, watch, series } = require("gulp");
// const uglify = require("gulp-uglify");
// const rename = require("gulp-rename");
//
// const path = "app/js";
//
// function scripts() {
//     return src(`${path}/*.js`)
//     .pipe(uglify())
//     .pipe(rename({ extname: ".min.js" }))
//     .pipe(dest("dist/"));
// }
//
// function watcher() {
//   watch(`${path}/*.js`, scripts)
// }
//
// exports.default = series(watcher)

/****************************************
 *
 ****************************************/

// const { src, dest, watch, series } = require("gulp");
// const uglify = require("gulp-uglify");
// const rename = require("gulp-rename");
// const clean = require("gulp-clean");
// const sass = require("sass");
// const gulpSass = require("gulp-sass");
// const scss = gulpSass(sass);
//
// const BUILD_FOLDER = "./dist";
// const SCRIPT_FOLDER = "./app/js";
// const STYLES_FOLDER = "./app/styles";
//
// async function cleanDist() {
//   return clean(`${BUILD_FOLDER}/**/*`, { force: true });
// }
//
// function scripts() {
//   return src(`${SCRIPT_FOLDER}/*.js`)
//     .pipe(uglify())
//     .pipe(rename({ extname: ".min.js" }))
//     .pipe(dest("dist/"));
// }
//
// function styles() {
//   return src(`${STYLES_FOLDER}/*.scss`)
//     .pipe(scss({ outputStyle: "compressed" }).on("error", scss.logError))
//     .pipe(rename({ extname: ".min.css" }))
//     .pipe(dest("dist/"));
// }
//
// function watcher() {
//   watch(`${SCRIPT_FOLDER}/*.js`, scripts);
//   watch(`${STYLES_FOLDER}/*.scss`, styles);
// }
//
// exports.build = series(cleanDist, scripts, styles);
// exports.default = series(scripts, styles, watcher);


/****************************************
 *
 ****************************************/

const { src, dest, watch, series } = require("gulp");
const rename = require("gulp-rename");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const clean = require("gulp-clean");
const babel = require("gulp-babel");
const sass = require("sass");
const gulpSass = require("gulp-sass");
const scss = gulpSass(sass);
const ssi = require("gulp-ssi");

const APP_FOLDER = "./app/";
const BUILD_FOLDER = "./dist/";
const SCRIPTS_FOLDER = `${APP_FOLDER}js/`;
const UTILS_FOLDER = `${SCRIPTS_FOLDER}utils/`;
const STYLES_FOLDER = `${APP_FOLDER}styles/`;
const PARTS_FOLDER = `${APP_FOLDER}parts/`;

async function cleanDist() {
  return clean(`${BUILD_FOLDER}**/*`, { force: true });
}

function html() {
  return src(`${APP_FOLDER}*.html`)
      .pipe(ssi())
      .pipe(dest(`${BUILD_FOLDER}`));
}

function scripts() {
  return src([`${UTILS_FOLDER}*.js`, `${SCRIPTS_FOLDER}*.js`])
      .pipe(
          babel({
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-transform-modules-commonjs"],
          }),
      )
      .pipe(concat("main.js"))
      .pipe(uglify())
      .pipe(rename({ extname: ".min.js" }))
      .pipe(dest(`${BUILD_FOLDER}js`));
}

function styles() {
  return src(`${STYLES_FOLDER}*.scss`)
      .pipe(scss({ outputStyle: "compressed" }))
      .pipe(rename({ extname: ".min.css" }))
      .pipe(dest(`${BUILD_FOLDER}css`));
}

function watcher() {
  watch(`${SCRIPTS_FOLDER}*.js`, scripts);
  watch(`${STYLES_FOLDER}*.scss`, styles);
  watch(`${APP_FOLDER}*.html`, html);
  watch(`${PARTS_FOLDER}*.html`, html);
}

exports.build = series(cleanDist, html, styles, scripts);
exports.default = series(html, styles, scripts, watcher);