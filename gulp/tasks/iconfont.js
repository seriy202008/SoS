export const iconfont = () => {
    return app.gulp.src(app.path.src.iconfont)
        .pipe(app.plugins.plumber(app.plugins.notify.onError(
            { title: `Icon Font`, message: `Error: <%= error.message %>` }
        )))
        .pipe(app.gulp.dest(app.path.build.iconfont))
        .pipe(app.plugins.browserSync.stream());
}