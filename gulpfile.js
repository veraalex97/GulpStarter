//in order to write our first gulp taks, the gulp module has to be required first.
var gulp = require('gulp');

//This is completely based on preference, choose either less or sass, less will be commented out.
//Remember, if you use less, the sass task has to be renamed.
var sass = require('gulp-sass');
// var less = require('gulp-less');

//this server automatically live reloads every change, this is done by the browserSync task written underneath
var browserSync = require('browser-sync').create()

//this runs the browserSync server
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    }
  })
})

//This runs the task "sass" to precompile sass into css which goes in the app/css folder.
gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass()) //converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});


/*This is the task that runs all of the OTHER tasks. This is what runs when "gulp" is typed into the command line.
  The task name can be changed but make sure to run "gulp newTaskName" in order for it to work.
*/
gulp.task('default', ['browserSync', "sass"], function() {
  gulp.watch('app/scss/**/*.scss', ['sass']);
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
})
