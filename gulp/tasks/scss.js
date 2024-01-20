import * as sass from 'sass';
import sassCompiler from 'gulp-sass';
import rename from 'gulp-rename';

import autoprefixer from 'gulp-autoprefixer';
import groupMedia from 'gulp-group-css-media-queries';
import minify from 'gulp-minify-css';

const defaultSass = sassCompiler(sass);

export const scss = () => {
    return app.gulp.src(app.path.src.scss, { sourcemaps: app.dev })
        .pipe(app.plugins.plumber(app.plugins.notify.onError(
            { title: `SCSS`, message: `Error: <%= error.message %>` }
        )))
        .pipe(app.plugins.replace(/~/g, '../../node_modules/'))
        .pipe(defaultSass({ outputStyle: 'expanded' }))
        .pipe(app.plugins.replace(/@img\//g, '../img/'))
        .pipe(app.plugins.if(
            app.build,
            groupMedia()
        ))
        .pipe(app.plugins.if(
            app.build,
            autoprefixer({ grid: true, overrideBrowserlist: ["last 5 versions"], cascade: true, })
        ))
        .pipe(app.plugins.if(
            app.build,
            minify({ processImport: false })
        ))
        .pipe(rename({ extname: ".min.css" }))
        .pipe(app.gulp.dest(app.path.build.css, { sourcemaps: app.dev }))
        .pipe(app.plugins.browserSync.stream());
}