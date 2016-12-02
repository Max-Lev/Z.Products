var gulp = require('gulp');var browserSync = require('browser-sync').create();var less = require('gulp-less');var cleanCSS = require('gulp-clean-css');var path = {    less: ['less/*.less', 'less/**/*.less'],    html: ['index.html',        'app/templates/*.html', 'app/templates/views/*.html'],    scripts: ['app/js/*.js'],    js: ['app/js/**/*.js']}gulp.task('browser-sync', function () {    browserSync.init({        server: {            baseDir: "."        }    });    gulp.watch(path.less, ['less']).on('change', browserSync.reload);    gulp.watch(path.html).on('change', browserSync.reload);    gulp.watch('app/js/*.js').on('change', browserSync.reload);    gulp.watch('app/js/**/*.js').on('change', browserSync.reload);});gulp.task('less', function () {    gulp.src('less/main.theme.less')        .pipe(less())        .pipe(cleanCSS())        .pipe(gulp.dest('./app/css'));});var watchLess = require('gulp-watch-less');gulp.task('less:watch', function () {    return gulp.src('less/main.theme.less')        .pipe(watchLess('less/*.less'))        .pipe(less())        .pipe(gulp.dest('./app/css'));});var copy = require('gulp-copy');gulp.task('prod',['less'], function() {    gulp.src(['app/js/*','app/js/**/*.js'])        .pipe(gulp.dest('prod/js'))    gulp.src(['app/vendor/*.js'])        .pipe(gulp.dest('prod/vendor'))    gulp.src(['app/css/*.css'])        .pipe(gulp.dest('prod/css'))    gulp.src(['app/templates/views/*.html'])        .pipe(gulp.dest('prod/templates/views'))});gulp.task('serve', ['less', 'browser-sync']);