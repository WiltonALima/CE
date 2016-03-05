var gulp = require('gulp'),
	minifyCSS = require('gulp-minify-css'),
	concat = require('gulp-concat')
	
gulp.task('css', function() {
	return gulp.src('dev/css/*css')
	.pipe(concat('CE.css'))
	.pipe(minifyCSS())
	.pipe(gulp.dest('build/css'))
})
gulp.task('default', function() {
	gulp.run('css')
	gulp.watch('dev/css/*.css', function() {
		gulp.run('css')
	})
})