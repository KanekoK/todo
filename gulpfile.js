var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('html', function() {
  gulp.src('./src/top.php')
      .pipe(gulp.dest('./public'));
});

gulp.task('img', function() {
  gulp.src('./src/img/*.jpg')
      .pipe(imagemin())
      .pipe(gulp.dest('./public/img'));
});

gulp.task('js', function() {
  gulp.src('./src/js/*.js')
      .pipe(concat('all.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('./public/js'));
});

// gulp.task('watch', function() {
//   gulp.watch('./src/js/*.js', ['js']);
// });

gulp.task('default', ['html', 'img', 'js']);