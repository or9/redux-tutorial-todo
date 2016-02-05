var gulp = require("gulp");
var spawn = require("child_process").spawn;

var outDir = "./dist";
var srcFiles = ["src/**/*"];
var bowerDependencies = ["bower_components/**/*"];

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
	gulp.watch(srcFiles.concat(bowerDependencies), buildTask);
}

function watchTestTask () {
	gulp.watch(srcFiles, testTask);
}

function testTask () {
	var process = spawn("npm", ["test"], { stdio: "inherit" });
}

