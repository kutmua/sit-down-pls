/* импорт ГЛАВНЫХ модулей */
import * as nodePath from 'path';
import gulp from 'gulp';
import gulpIf from 'gulp-if';
import {deleteAsync} from 'del';
import notify from 'gulp-notify';
import sourcemaps from 'gulp-sourcemaps';
import rename from 'gulp-rename';
import zipPlugin from 'gulp-zip';

/* импорт ВСПОМОГАТЕЛЬНЫХ модулей */
  /* HTML */
import fileInclude from 'gulp-file-include';
import htmlMin from 'gulp-htmlmin';
import versionNumber from 'gulp-version-number';

  /* SCSS */
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import cleanCss from 'gulp-clean-css';
import autoprefixer from 'gulp-autoprefixer';

  /* JS */
import terser from 'gulp-terser';
import babel from 'gulp-babel';
import uglify from 'gulp-uglify-es';

  /* IMGs */
import webp from 'gulp-webp';
import imageMin from 'gulp-imagemin';

  /* SERVER */
import browserSync from 'browser-sync';

/* КОНСТАНТЫ */
const sass = gulpSass(dartSass);
const browser = browserSync.create();
const isProd = process.argv.includes('--production');
const rootFolder = nodePath.basename(nodePath.resolve());

/* ЗАДАЧИ */

  /* Очистка директории */
function reset() {
  return deleteAsync('dist')
}

  /* HTML */
const htmlMinify = () => {
  return gulp.src('src/*.html')
    .pipe(fileInclude())
    .pipe(
      versionNumber({
        'value': '%DT%',
        'append': {
          'key': '_v',
          'cover': 0,
          'to' : [
            'css',
            'js',
          ]
        },
        'output': {
          'file': 'gulp-ver/version.json'
        }
      })
    )
    .pipe(gulpIf(isProd, htmlMin({
      collapseWhitespace: true,
    })))
    .pipe(gulp.dest('dist'))
    .pipe(browser.stream())
}

  /* SCSS */
const mainCss = () => {
  return gulp.src('src/styles/main-styles/**/*.scss')
    .pipe(gulpIf(!isProd, sourcemaps.init()))
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .pipe(autoprefixer({
      grid: true,
      overrideBrowserslist: ["last 3 versions"],
      cascade: true
    }))
    .pipe(gulpIf(isProd, cleanCss()))
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(gulpIf(!isProd, sourcemaps.write()))
    .pipe(gulp.dest('dist/styles/'))
    .pipe(browser.stream())
}

const othersCss = () => {
  return gulp.src('src/styles/libraries-styles/**/*.css')
    .pipe(gulpIf(!isProd, sourcemaps.init()))
    .pipe(autoprefixer({
      grid: true,
      overrideBrowserslist: ["last 3 versions"],
      cascade: true
    }))
    .pipe(gulpIf(isProd, cleanCss()))
    .pipe(gulpIf(!isProd, sourcemaps.write()))
    .pipe(gulp.dest('dist/styles/'))
    .pipe(browser.stream())
}

  /* JS */
const jsMinify = () => {
  return gulp.src('src/js/*.js')
    .pipe(gulpIf(!isProd, sourcemaps.init()))
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(gulpIf(isProd, uglify.default().on('error', notify.onError())))
    .pipe(gulpIf(isProd, terser()))
    .pipe(rename({
      extname: '.min.js'
    }))
    .pipe(gulpIf(!isProd, sourcemaps.write()))
    .pipe(gulp.dest('dist/js/'))
    .pipe(browser.stream())
}

const othersJs = () => {
  return gulp.src('src/js/libraries-scripts/**/*.js')
    .pipe(gulpIf(!isProd, sourcemaps.init()))
    .pipe(gulpIf(isProd, terser()))
    .pipe(gulpIf(!isProd, sourcemaps.write()))
    .pipe(gulp.dest('dist/js/'))
    .pipe(browser.stream())
}

  /* IMGS, SVG */
const imgMinify = () => {
  return gulp.src([
    'src/img/*.jpg',
    'src/img/*.png',
    'src/img/*.jpeg',
    'src/img/*.webp',
  ])
    .pipe(imageMin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      interlaced: true,
      optimizationLevel: 2 // от 0 до 7
    }))
    .pipe(webp())
    .pipe(gulp.dest('dist/img/'))
    .pipe(browser.stream())
}

const imgNoMinify = () => {
  return gulp.src([
    'src/img/no-minify/**/*.jpg',
    'src/img/no-minify/**/*.png',
    'src/img/no-minify/**/*.jpeg',
    'src/img/no-minify/**/*.webp',
  ])
    .pipe(imageMin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      interlaced: true,
      optimizationLevel: 2 // от 0 до 7
    }))
    .pipe(gulp.dest('dist/img/'))
    .pipe(browser.stream())
}

const faviconsTransfer = () => {
  return gulp.src('src/img/favicons/**/*.*')
    .pipe(gulp.dest('dist/img/favicons/'));
}

const svgTransfer = () => {
  return gulp.src('src/img/*.svg')
    .pipe(gulp.dest('dist/img/'));
}

  /* FONTS */
const fontsTransfer = () => {
  return gulp.src('src/fonts/**/*.*')
    .pipe(gulp.dest('dist/fonts/'));
}

  /* ZIP */
const zip = () => {
  deleteAsync(`./${rootFolder}.zip`)
  return gulp.src('./dist/**/*.*')
    .pipe(gulpIf(isProd, zipPlugin(`${rootFolder}.zip`)))
    .pipe(gulpIf(isProd, gulp.dest('./')))
}

  /* SERVER */
const serverInit = () => {
  browserSync.init({
    server: {
      baseDir: './dist'
    },
    files: './src/**/*.*',
    watchEvents: ['add','change','unlink','unlinkDir'],
    notify: false
  })
}

  /* WATCH FILES */
function watchFiles() {
  gulp.watch('src/**/*.html', htmlMinify);
  gulp.watch('src/styles/main-styles/**/*.scss', mainCss);
  gulp.watch('src/styles/libraries-styles/**/*.css', othersCss);
  gulp.watch('src/js/*.js', jsMinify);
  gulp.watch('src/js/libraries-scripts/**/*.js', othersJs);
  gulp.watch([
    'src/img/*.jpg',
    'src/img/*.png',
    'src/img/*.jpeg',
    'src/img/*.webp',
  ], imgMinify);
  gulp.watch('src/img/no-minify/**/*.*', imgNoMinify);
  gulp.watch('src/img/**/*.svg', svgTransfer);
  gulp.watch('src/img/favicons/**/*.*', faviconsTransfer);
  gulp.watch('src/fonts/**/*.*', fontsTransfer);
}


const mainTasks = gulp.series(
  gulp.parallel (
    htmlMinify,
    jsMinify,
    othersJs,
    mainCss,
    othersCss,
    imgMinify,
    imgNoMinify,
    svgTransfer,
    faviconsTransfer,
    fontsTransfer
  ),
  zip
)

const dev = gulp.series(reset, mainTasks, gulp.parallel(watchFiles, serverInit));

gulp.task('default', dev);