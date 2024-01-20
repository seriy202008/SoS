import { deleteAsync } from 'del';
import zipGenerator from 'gulp-zip';

export const zip = () => {
    deleteAsync(`./${app.path.rootFolder}.zip`)
    return app.gulp.src(`${app.path.buildFolder}/**/*.*`)
        .pipe(app.plugins.plumber(app.plugins.notify.onError(
            { title: `ZIP`, message: `Error: <%= error.message %>` }
        )))
        .pipe(zipGenerator(`${app.path.rootFolder}.zip`))
        .pipe(app.gulp.dest(`./`));
}