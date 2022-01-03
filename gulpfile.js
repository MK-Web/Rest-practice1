const gulp = require ('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require ('browser-sync').create();


// Compile to css

function style() {
    // scss file location
    return gulp.src('./scss/**/*.scss') 
    // pass that file through sass compiler
        .pipe(sass().on ('error' , sass.logError))

        .pipe(gulp.dest('./css'))
    // where to save compiled CSS
}

function watch() {
    browserSync.init({
        server:{
            baseDir: './'
        }
    });
    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./*.html').on('change',browserSync.reload);
    gulp.watch('./js/**/*.js',).on('change',browserSync.reload);

}

exports.style = style;
exports.watch = watch;