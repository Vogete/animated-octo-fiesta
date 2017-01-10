// Import config
var config = require('./gulp.config.js');

module.exports = function(gulp) {
	gulp.task('copy_assets', function() {
	  return gulp
	  	.src( config.libs.copy_fonts )
	    .pipe(gulp.dest(config.dist.fonts));
	});
};
