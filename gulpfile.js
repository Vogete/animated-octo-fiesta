var gulp = require("gulp");
var runSequence = require('gulp-run-sequence');
var config = require('./gulp_tasks/gulp.config.js');

// Concat js
require('./gulp_tasks/gulp.libs.js.concat')(gulp);

// Concat css
require('./gulp_tasks/gulp.libs.css.concat')(gulp);
require('./gulp_tasks/gulp.browserify')(gulp);


// Compile and concat sass
require('./gulp_tasks/gulp.sass')(gulp);

// Compile TS
require('./gulp_tasks/gulp.ts')(gulp);

// Copy static
require('./gulp_tasks/gulp.copy_index')(gulp);
require('./gulp_tasks/gulp.copy_assets')(gulp);

// Clear dist folder
require('./gulp_tasks/gulp.clear')(gulp);


gulp.task("build", function() {
    runSequence("clear", "copy_index", "copy_assets", "libs.css.concat", "libs.js.concat", "sass", "browserify");
});

gulp.task('watch', function() {
    runSequence('build', 'watch-files');    
});

gulp.task('watch-files', function(){
    gulp.watch(config.src.indexPage, ['copy_index']);
    gulp.watch(config.src.sass, ['sass']);
    gulp.watch(config.src.importedComponents, ['copy_assets']);
    gulp.watch(config.libs.js, ['libs.js.concat']);   
    // gulp.watch(config.src.ts, ["ts"]);     
    gulp.watch(config.src.ts, ['browserify']);
});
