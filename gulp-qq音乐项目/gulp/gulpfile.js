var gulp = require('gulp');

// 压缩html
var HtmlClean = require("gulp-htmlclean");

// 压缩css
var CleanCss = require("gulp-clean-css");

// 压缩图片
var ImageMin = require("gulp-imagemin");

// 压缩js
var Uglify = require("gulp-uglify");

// 添加前缀 gulp-postcss autoprefixer
var PostCss = require("gulp-postcss");
var Autoprefixer = require("autoprefixer");

// 去掉调式语句，断点和console
// var debug = require("gulp-strip-debug"); 

// less转换成css
var less = require("gulp-less");

// 转换es6代码 细节点很多
var babel = require("gulp-babel");

// 开启服务器
var connect = require("gulp-connect");

// 获取环境变量
var devmode = process.env.NODE_ENV == "development"
// 设置环境变量 在命令行中export NODE_ENV="development" 

var folder = {
    src: "src/",
    dist: "dist/"
}
gulp.task("html", function () {
    gulp.src(folder.src + "html/*")
        .pipe(connect.reload())
        .pipe(HtmlClean())
        .pipe(gulp.dest(folder.dist + "html"))
})
gulp.task("css", function () {
    gulp.src(folder.src + "css/*")
        .pipe(connect.reload())
        .pipe(less())
        .pipe(PostCss([Autoprefixer({ browsers: ['last 1 version'] })]))
        .pipe(CleanCss())
        .pipe(gulp.dest(folder.dist + "css"))
})
gulp.task("js", function () {
    gulp.src(folder.src + "js/*")
        .pipe(connect.reload())
        .pipe(babel())
        .pipe(Uglify())
        .pipe(gulp.dest(folder.dist + "js"))
})
gulp.task("images", function () {
    gulp.src(folder.src + "images/*")
        .pipe(ImageMin())
        .pipe(gulp.dest(folder.dist + "images"))
})
gulp.task("server", () => { // 这里是开启服务器
    connect.server({
        livereload: true
    });
})
gulp.task("watch", () => { //这种监听很麻烦
    gulp.watch(folder.src + "html/*", async function () {
        gulp.src(folder.src + "html/*")
            .pipe(connect.reload())
            .pipe(HtmlClean())
            .pipe(gulp.dest(folder.dist + "html"))
    })
    gulp.watch(folder.src + "css/*", async function () {
        gulp.src(folder.src + "css/*")
            .pipe(connect.reload())
            .pipe(less())
            .pipe(PostCss([Autoprefixer({ browsers: ['last 1 version'] })]))
            .pipe(CleanCss())
            .pipe(gulp.dest(folder.dist + "css"))
    })
    gulp.watch(folder.src + "js/*", async function () {
        gulp.src(folder.src + "js/*")
            .pipe(connect.reload())
            .pipe(babel())
            .pipe(Uglify())
            .pipe(gulp.dest(folder.dist + "js"))
    })
})
// gulp.task('default',["html"]); 4.0版本就不能这样用了
// gulp.series("a",()=>{}) 串行输出
gulp.task('default', gulp.parallel(["html", "css", "js", "images", "server", "watch"], () => { })); //并行输出



// gulp.task
// gulp.src
// gulp.dest
// gulp.watch