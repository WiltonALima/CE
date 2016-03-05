var gulp 				= require('gulp');
var	concat 			= require('gulp-concat');
var runSequence = require('run-sequence');
var search 			= require('recursive-search');
var buildDir 		= 'build/';
//var server 		= require('gulp-server-livereload');
var	minifyCSS 	= require('gulp-minify-css');
var browserSync = require('browser-sync').create();

var devDeps		= ["dev/libs/jquery/dist/jquery.min.js",
				"dev/libs/bootstrap/dist/js/bootstrap.min.js",
				"dev/libs/angular/angular.min.js",
				"dev/libs/angular-route/angular-route.min.js",
				"dev/libs/string-mask/src/string-mask.js",
				//"dev/libs/br-validations/br-validations.min.js",
				"dev/libs/angular-locale-pt-br/angular-locale_pt-br.js",
				"dev/libs/angular-input-masks/angular-input-masks-dependencies.min.js",
				//"dev/libs/angular-input-masks/angular-input-masks-standalone.min.js"
				"dev/libs/angular-input-masks/angular-input-masks.br.js",
				//"dev/libs/angular-price-format/dist/angular-price-format.min.js",
				"dev/libs/angular-messages/angular-messages.min.js"

				];

//var devFJs = search.recursiveSearchSync('*.js', __dirname + '/dev/angular')
var devFiles = search.recursiveSearchSync('*.*', __dirname + '/dev')

//var appJs = search.recursiveSearchSync('*.js*', __dirname + '/dev/angular')
//var appJs = ['dev/angular/**.js', 'dev/angular/**/*.js', 'dev/angular/**/*.js'];
var appJs = ['dev/angular/**.js', 'dev/angular/**/*.js', 'dev/angular/**/**/*.js'];

var htmlFiles = ['index.html', 'build/view/**/*.html', 'build/view/**/**/*.html'];


gulp.task('devDeps', function() {
	var deps = gulp.src(devDeps);
	return deps.pipe(concat('CE_deps.js'))
			.pipe(gulp.dest('build/js'))

});

gulp.task('appJs', function() {
		var js = gulp.src(appJs);
		return js.pipe(concat('CE.js'))
				.pipe(gulp.dest('build/js'))
});

var sourceFiles = 'dev/libs/bootstrap/dist/fonts/*';
//livereload.reload(["index.html"])
gulp.task('copyBootstrapsFonts', function () {
  return gulp
    .src(sourceFiles)
    .pipe(gulp.dest('build/fonts/'))
});



gulp.task('css', function() {
	return gulp.src(['dev/css/*.css', 'dev/libs/bootstrap/dist/css/*.css'])
	.pipe(concat('CE.css'))
	.pipe(minifyCSS())
	.pipe(gulp.dest('build/css'))
});

 gulp.task('serve', function() {
 	/*
 	browserSync.init(appJs, {
 		baseDir: '.*'
 	});
 	gulp.watch(appJs);
  gulp.watch("*.html").on('change', browserSync.reload);
  */
  /*
  gulp.src('appJs')
    .pipe(server({
      livereload: true,
      directoryListing: true,
      port: 9000,
      open: true
    }));
	*/
 });

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        /*server: {
            baseDir: "./",
            server: "./caixas",
            port: 9000
        }
        */
    });
});
gulp.task('browser-sync-reload', function() {
    browserSync.reload();
});
gulp.task('default', function(callback) {
	runSequence('css', 'devDeps', 'appJs', 'copyBootstrapsFonts', callback);
	gulp.watch('./dev/angular/**' , function() {
		runSequence('appJs', 'browser-sync-reload');

	});
	gulp.watch('./dev/css/**' , function() {
		runSequence('css', 'browser-sync-reload');
	});
	gulp.watch(htmlFiles , function() {
		runSequence('browser-sync-reload');
	});
	gulp.watch('./dev/libs/**' , function() {
		runSequence('css', 'devDeps', 'appJs', 'copyBootstrapsFonts', 'browser-sync-reload');
	});

});



