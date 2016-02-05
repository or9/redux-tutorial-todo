var gulp = require("gulp");
var spawn = require("child_process").spawn;

var outDir = "./dist";
var srcFiles = ["src/**/*", "!src/**/*.js"];
var bowerDependencies = ["bower_components/**/*"];
var watchFiles = ["src/**/*"].concat(bowerDependencies);

gulp.task("watch", watchTestTask);
gulp.task("default", ["build"]);
gulp.task("test", testTask);
gulp.task("watchBuild", watchBuildTask);
gulp.task("copySrc", copySrcTask);
gulp.task("build", ["copySrc", "copyBowerDependencies"]);
gulp.task("copyBowerDependencies", copyBowerDependencies);

function copyBowerDependencies () {
	return gulp.src(bowerDependencies, { base: "./" })
		.pipe(gulp.dest(outDir));
}

function copySrcTask () {
	return gulp.src(srcFiles, { base: "./src" })
		.pipe(gulp.dest(outDir));
}

function watchBuildTask () {
	gulp.watch(watchFiles, buildTask);
}

function watchTestTask () {
	gulp.watch(watchFiles, testTask);
}

function testTask () {
	var process = spawn("npm", ["test"], { stdio: "inherit" });
}

