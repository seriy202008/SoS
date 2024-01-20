// Имя папки проекта
import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./#src`;

export const path = {
    src: {
        html: [`${srcFolder}/html/*.html`, `!${srcFolder}/html/_*.html`],
        scss: [`${srcFolder}/scss/*.scss`, `!${srcFolder}/scss/_*.scss`],
        js: `${srcFolder}/js/main.js`,
        img: {
            min: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif}`,
            nomin: `${srcFolder}/img/**/*.{ico,webp,svg}`,
        },
        iconfont: `${srcFolder}/iconfont/*.*`,
    },
    build: {
        html: `${buildFolder}/`,
        css: `${buildFolder}/css/`,
        js: `${buildFolder}/js/`,
        img: `${buildFolder}/img/`,
        font: `${buildFolder}/fonts/`,
        iconfont: `${buildFolder}/iconfont/`,
    },
    watch: {
        html: `${srcFolder}/html/**/*.html`,
        scss: `${srcFolder}/scss/**/*.scss`,
        js: `${srcFolder}/js/**/*.js`,
        img: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,svg,ico,webp}`,
        font: `${srcFolder}/fonts/**/*.{otf,ttf,woff,woff2}`,
    },
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
}