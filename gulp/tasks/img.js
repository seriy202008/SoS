import imagemin from 'gulp-imagemin';

export const img = () => {
    return app.gulp.src(app.path.src.img.min)
        .pipe(app.plugins.plumber(app.plugins.notify.onError(
            { title: `IMG`, message: `Error: <%= error.message %>` }
        )))
        // Сжатие
        .pipe(app.plugins.if(
            app.build,
            app.gulp.src(app.path.src.img.min)
        ))
        .pipe(app.plugins.if(
            app.build,
            app.plugins.newer(app.path.build.img)
        ))
        .pipe(app.plugins.if(
            app.build,
            imagemin({
                progressive: true,
                svgoPlugins: [{ removeViewBox: false }],
                interlaced: true,
                optimizationLevel: 3 // 0 to 7
            })
        ))
        .pipe(app.plugins.if(
            app.build,
            app.gulp.dest(app.path.build.img)
        ))
        // Не сжатие
        .pipe(app.gulp.src(app.path.src.img.nomin))
        .pipe(app.plugins.newer(app.path.build.img))
        .pipe(app.gulp.dest(app.path.build.img))
        // Сервер
        .pipe(app.plugins.browserSync.stream());
}