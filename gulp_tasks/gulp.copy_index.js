// Import config
var config = require('./gulp.config.js');

module.exports = function(gulp) {
	gulp.task('copy_index', function() {
	  return gulp
	  	.src([
	  		config.src.indexPage,
	  		])
	    .pipe(gulp.dest(config.dist.root));
	});
};
