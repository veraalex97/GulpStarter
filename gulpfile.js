//in order to write our first gulp taks, it has to be required first.
var gulp = require('gulp');
var sass = require('gulp-sass');
//live reloading of browser (start a server)
var browserSync = require('browser-sync').create()

// gulp.task('task-name', function() {
//   //Stuff
// });

//this runs the server
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    }
  })
})

//This is preprocessing Gulp task
gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass()) //converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('watch', ['browserSync', "sass"], function() {
  gulp.watch('app/scss/**/*.scss', ['sass']);
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
})
