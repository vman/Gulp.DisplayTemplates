var gulp = require('gulp');
var spsave = require('gulp-spsave');

//Display Templates. Watch all display template js files and only upload the ones that change
gulp.task('watch:displayTemplates', function (obj) {

    var watcher = gulp.watch("DisplayTemplates/*.html");

    return watcher.on('change', function (event) {
        console.log('File ' + event.path + ' was ' + event.type);
        uploadToSharePoint(event.path);
    });
});

function uploadToSharePoint(files) {
    return gulp.src(files)
    .pipe(spsave({
        username: "user@tenant.onmicrosoft.com",
        password: "password",
        siteUrl: "https://tenant.sharepoint.com/sites/intranet/",
        folder: "_catalogs/masterpage/Display Templates/Search",
        checkin: true,
        checkinType: 1
    }));
}