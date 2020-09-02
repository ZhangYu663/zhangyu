


var gulp = require("gulp");
var uglify = require("gulp-uglify");
gulp.task("aa",function(){
    console.log("这是压缩");
    gulp.src("js/a1.js").pipe(uglify()).pipe(gulp.dest("D:/a"));
});



// ----------------------------------------
// cnpm install --save-dev babel-preset-es2015
// cnpm install --save-dev gulp-babel@7 babel-core babel-preset-env

var babel = require("gulp-babel");

gulp.task("_es",function(){
    gulp.src("banner.js").pipe(babel({presets: ['es2015']})).pipe(gulp.dest("D:/a"));
});