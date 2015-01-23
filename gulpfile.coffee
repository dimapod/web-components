gulp        = require("gulp")
runSequence = require("run-sequence")
ghPages     = require("gulp-gh-pages")
connect     = require('gulp-connect')

gulp.task "connect", ->
  connect.server {
      root: './web/',
      port: 8022
  }

gulp.task "connect-stop", ->
  connect.serverClose()

gulp.task "ghPages", ->
  gulp.src(['./web/**/*'], {})
    .pipe ghPages({})

gulp.task "serve", ->
  runSequence "connect"

