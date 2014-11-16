var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var del = require('del');
// set variable via $ gulp --type production
var environment = $.util.env.type || 'development';
var isProduction = environment === 'production';
var webpackConfig = require('./webpack.config.js')[environment];

var port = $.util.env.port || 9999;
var app = 'app/';
var dist = 'dist/';

gulp.task('scripts', function() {
  return gulp.src(webpackConfig.entry)
    .pipe($.webpack(webpackConfig))
    .pipe(isProduction ? $.uglifyjs() : $.util.noop())
    .pipe($.size({ title : 'js' }))
    .pipe(gulp.dest(dist + 'js/'))
    .pipe($.connect.reload());
});

// copy html from app to dist
gulp.task('html', function() {
  return gulp.src(app + 'index.html')
    .pipe($.size({ title : 'html' }))
    .pipe(gulp.dest(dist))
    .pipe($.connect.reload());
});

gulp.task('styles',function(cb) {

  // convert stylus to css
  return gulp.src(app + 'stylus/main.styl')
    .pipe($.stylus({
      // only compress if we are in production
      compress: isProduction,
      // include 'normal' css into main.css
      'include css' : true
    }))
    .pipe($.size({ title : 'css' }))
    .pipe(gulp.dest(dist + 'css/'))
    .pipe($.connect.reload());
});

// add livereload on the given port
gulp.task('serve', function() {
  $.connect.server({
    root: dist,
    port: port,
    livereload: {
      port: 35729
    }
  });
});

// copy images
gulp.task('images', function(cb) {
  return gulp.src(app + 'images/**/*.{png,jpg,jpeg,gif}')
    .pipe($.size({ title : 'images' }))
    .pipe(gulp.dest(dist + 'images/'));
});

// copy data folder
gulp.task('data', function(cb) {
  return gulp.src(app + 'scripts/data/**/*.json')
    .pipe(gulp.dest(dist + 'js/data'));
});

// copy css assets folder
gulp.task('cssAssets', function(cb) {
  return gulp.src(app + 'bower_components/select2/**/*.{png,gif}')
    .pipe(gulp.dest(dist + 'css'));
});

// copy css assets folder
gulp.task('fonts', function(cb) {
  return gulp.src(app + 'bower_components/elegant-icons/fonts/**/*.{eot,svg,ttf,woff}')
    .pipe(gulp.dest(dist + 'fonts'));
});

// watch styl, html and js file changes
gulp.task('watch', function() {
  gulp.watch(app + 'stylus/*.styl', ['styles']);
  gulp.watch(app + 'index.html', ['html']);
  gulp.watch(app + 'scripts/**/*.js', ['scripts']);
  gulp.watch(app + 'scripts/**/*.jsx', ['scripts']);
});

// remove bundels
gulp.task('clean', function(cb) {
  del([dist], cb);
});

// by default build project and then watch files in order to trigger livereload
gulp.task('default', ['build', 'serve', 'watch']);

// waits until clean is finished then builds the project
gulp.task('build', ['clean'], function(){
  gulp.start(['images','data', 'cssAssets', 'fonts', 'html','scripts','styles']);
});
