//获取依赖
var gulp = require("gulp"),
	coffee = require("gulp-coffee"),
	jade = require("gulp-jade"),
	plumber = require("gulp-plumber"),
	sass = require('gulp-sass'),
	concat = require('gulp-concat'),
	livereload = require('gulp-livereload'),
	clean = require("gulp-clean"),
	runSequence = require('run-sequence'),
	watch = require('gulp-watch'),
	autoprefixer = require('gulp-autoprefixer'),
	webserver = require('gulp-webserver');
	babel = require('gulp-babel');
//定义各个目录

var path = {
	public: 'public',
	dist: 'dist',
	jade: ['public/partials/**/*.jade'],
	assets: ['public/assets/**/*'],
	index: ['public/index.jade'],
	stylesMain: 'public/styles/entry.scss',
	jss: ['public/scripts/**/*.js'],
	jsLibs: [
	    'bower_components/jquery/dist/jquery.js',
	    'bower_components/angular/angular.js',
	    'bower_components/lodash/dist/lodash.js',
	    'bower_components/angular-ui-router/release/angular-ui-router.min.js',
	    'bower_components/angular-ui/build/angular-ui.min.js',
	    'bower_components/angular-aria/angular-aria.js',
	    'bower_components/angular-animate/angular-animate.js',
	    'bower_components/angular-messages/angular-messages.min.js',
	    'bower_components/angular-material/angular-material.js'
 	]
}
gulp.task('clean', function() {
	return gulp.src(path.dist)
	.pipe(clean());
})
gulp.task('copy', function() {
	return gulp.src(path.assets)
		.pipe(gulp.dest(path.dist + '/assets'));
})
gulp.task('jsLibs-deploy', function() {
	return gulp.src(path.jsLibs)
	.pipe(plumber())
	.pipe(concat('libs.js'))
	.pipe(gulp.dest(path.dist + '/scripts'));
})

gulp.task('concatJs', function() {
	return gulp.src(path.jss)
	.pipe(plumber())
	.pipe(concat('main.js'))
	.pipe(gulp.dest('dist/scripts'))
})


gulp.task('jade-deploy', function() {
	return gulp.src(path.jade)
	.pipe(plumber())
	.pipe(jade())
	.pipe(gulp.dest(path.dist + '/partials'));
})
gulp.task('index-deploy', function() {
	return gulp.src(path.index)
	.pipe(plumber())
	.pipe(jade({
		'pretty': true
	}))
	.pipe(gulp.dest(path.dist));
})
gulp.task('sass-deploy', function() {
	return gulp.src(path.stylesMain)
	.pipe(plumber())
	.pipe(sass({outputStyle: 'expanded'}))
	.pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
	}))
	.pipe(gulp.dest(path.dist + '/styles'));
})


gulp.task('webserver', function(){
	return gulp.src('dist')
		.pipe(webserver({
			livereload: true,
			open: false,
			port: 4000
		}))
})
gulp.task('watch', function() {
  gulp.watch(path.jade, ['jade-deploy'])
  gulp.watch(path.jss, ['concatJs'])
  gulp.watch(path.index, ['index-deploy'])
  gulp.watch(["public/**/*.scss"], ['sass-deploy'])
  gulp.watch(["dist/scripts/**/*.js","dist/styles/entry.css","dist/index.html"])
    .on("change",livereload.changed)
});


gulp.task('default', function() {
	runSequence(
		'clean',
	[
		'jsLibs-deploy',
		'concatJs',
		'copy',
		'jade-deploy',
		'index-deploy',
		'sass-deploy'
	],
	'webserver',
	'watch'
	);
})
	
