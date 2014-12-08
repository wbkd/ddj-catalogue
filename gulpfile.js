var gulp = require('gulp');
var path = require('path');
var $ = require('gulp-load-plugins')();
var del = require('del');
var jest = require('gulp-jest');
// set variable via $ gulp --type production
var environment = process.env.NODE_ENV || 'development';
var isProduction = environment === 'production';
var webpackConfig = require('./webpack.config.js')[environment];
var config = require(path.resolve(__dirname, 'package')).devConfig;

var port = $.util.env.port || 9999;
var app = 'app/';
var dist = 'dist/';

console.log(environment)

// https://github.com/ai/autoprefixer
var autoprefixerBrowsers = [                 
  'ie >= 9',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 6',
  'opera >= 23',
  'ios >= 6',
  'android >= 4.4',
  'bb >= 10'
];

gulp.task('scripts', function() {
  return gulp.src(webpackConfig.entry)
    .pipe($.webpack(webpackConfig))
    .pipe(isProduction ? $.uglifyjs() : $.util.noop())
    .pipe(gulp.dest(dist + 'js/'))
    .pipe($.size({ title : 'js' }))
    .pipe($.connect.reload());
});

// copy html from app to dist
gulp.task('html', function() {
  return gulp.src(app + 'index.html')
    .pipe($.preprocess({context : { IS_PRODUCTION : isProduction }})) 
    .pipe(gulp.dest(dist))
    .pipe($.size({ title : 'html' }))
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
    .pipe($.autoprefixer({browsers: autoprefixerBrowsers})) 
    .pipe(gulp.dest(dist + 'css/'))
    .pipe($.size({ title : 'css' }))
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

// copy css assets folder
gulp.task('favicon', function(cb) {
  return gulp.src(app + '*.{ico,png}')
    .pipe(gulp.dest(dist));
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

gulp.task('deploy', function() {
    var rsync = require('rsyncwrapper').rsync;

    return rsync({
        src: path.resolve(__dirname, 'dist/*'),
        dest: config.rsync.dest,
        ssh: true,
        recursive: true,
    }, function(error, stdout, stderr, cmd) {
        if(error){
         console.log(error.message); 
        }
    });
});


// by default build project and then watch files in order to trigger livereload
gulp.task('default', ['build', 'serve', 'watch']);

// waits until clean is finished then builds the project
gulp.task('build', ['clean'], function(){
  gulp.start(['images','data', 'cssAssets', 'fonts', 'html','scripts','styles', 'favicon']);
});

gulp.task('test', function () {
    return gulp.src('app').pipe(jest({
        scriptPreprocessor: 'utils/preprocessor.js',
        unmockedModulePathPatterns: [
            "node_modules/react"
        ],
        testDirectoryName: "__tests__",
        testPathIgnorePatterns: [
            "node_modules"
        ],
        moduleFileExtensions: [
            "js",
            "json",
            "react"
        ]
    }));
});
