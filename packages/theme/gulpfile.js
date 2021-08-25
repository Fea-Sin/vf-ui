"use strict";

const { series, src, dest } = require("gulp");
const less = require("gulp-less");
const LessAutoprefix = require("less-plugin-autoprefix");
const cssmin = require("gulp-cssmin");

const autoprefix = new LessAutoprefix({
  browsers: ["ie > 9", "last 2 versions"],
});

function compile() {
  return src("./src/*.less")
    .pipe(
      less({
        plugins: [autoprefix],
      })
    )
    .pipe(cssmin())
    .pipe(dest("./lib"));
}

exports.build = series(compile);
