import gulp from 'gulp';

// Конфигурация
import { path } from './gulp/config/path.js';
import { plugins } from './gulp/config/plugins.js';

// Глобальная переменная APP
global.app = {
    build: process.argv.includes('--build'),
    dev: !process.argv.includes('--build'),
    gulp: gulp,
    path: path,
    plugins: plugins,
}

// Импорт задач
import { reset } from './gulp/tasks/reset.js';
import { server } from './gulp/tasks/server.js';
import { html } from './gulp/tasks/html.js';
import { scss } from './gulp/tasks/scss.js';
import { js } from './gulp/tasks/js.js';
import { img } from './gulp/tasks/img.js';
import { iconfont } from './gulp/tasks/iconfont.js';
import { OTFtoTTF, TTFtoWOFF, fonstStyle } from './gulp/tasks/font.js';
import { zip } from './gulp/tasks/zip.js';

const font = gulp.series(OTFtoTTF, TTFtoWOFF, fonstStyle);
// Наблюдатель
function watcher() {
    gulp.watch(app.path.watch.html, html);
    gulp.watch(app.path.watch.scss, scss);
    gulp.watch(app.path.watch.js, js);
    gulp.watch(app.path.watch.img, img);
    gulp.watch(app.path.watch.font, font);
}

// Создание сценариев
const mainTasks = gulp.series(font, gulp.parallel(html, scss, js, img, iconfont));

const dev = gulp.series(
    reset,
    mainTasks,
    gulp.parallel(watcher, server)
)
const build = gulp.series(
    reset,
    mainTasks
)
const deployZIP = gulp.series(
    reset,
    mainTasks,
    zip
)

// Выполнение сценариев
gulp.task('default', dev);
gulp.task('build', build);
gulp.task('deployZIP', deployZIP);

// Экспорт сценариев
export { dev };
export { build };
export { deployZIP };