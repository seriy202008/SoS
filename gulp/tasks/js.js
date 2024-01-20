import webpack from 'webpack-stream';

export const js = () => {
    return app.gulp.src(app.path.src.js, { sourcemaps: app.dev })
        .pipe(app.plugins.plumber(app.plugins.notify.onError({
            title: `JS`,
            message: "Error: <%= error.message %>"
        })))
        .pipe(app.plugins.replace(/@img\//g, '../img/'))
        .pipe(webpack({
            mode: app.dev ? 'development' : 'production',
            output: {
                filename: 'app.min.js',
            }
        }))
        .pipe(app.gulp.dest(app.path.build.js, { sourcemaps: app.dev }))
        .pipe(app.plugins.browserSync.stream());
}