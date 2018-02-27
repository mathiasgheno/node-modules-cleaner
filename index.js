var fs = require("fs");
fs.readdir(__dirname, function (err, elements) {
    elements.map(function (element) { return __dirname + "/" + element; })
        .filter(function (element) { return fs.statSync(element).isDirectory(); })
        .filter(function (directory) { return fs.existsSync(directory + "/node_modules"); })
        .forEach(function (directory) { return deleteFolder(directory + "/node_modules"); });
    console.log('completo');
});
var deleteFolder = function (path) {
    if (fs.existsSync(path)) {
        fs.readdirSync(path).forEach(function (file) {
            var curPath = path + "/" + file;
            if (fs.lstatSync(curPath).isDirectory())
                deleteFolder(curPath);
            else
                fs.unlinkSync(curPath);
        });
        fs.rmdirSync(path);
    }
};
