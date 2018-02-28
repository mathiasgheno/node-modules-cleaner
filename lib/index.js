#! /usr/bin/env node
"use strict";
exports.__esModule = true;
var fs = require("fs");
var readline = require('readline');
function listar() {
    console.log('You have this: ');
    console.log(listFolders());
}
exports.listar = listar;
function remover() {
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    listar();
    rl.question('Do you want to remove this directorys? (y/n)', function (answer) {
        if (answer === 'yes' || answer == 'y') {
            console.log('removendo');
            listFolders().forEach(function (directory) { return deleteFolder(directory + "/node_modules"); });
            console.log('completo');
            rl.close();
        }
        else {
            console.log('Have a nice day');
        }
    });
}
exports.remover = remover;
var listFolders = function () {
    return fs.readdirSync(process.cwd())
        .map(function (element) { return process.cwd() + "/" + element; })
        .filter(function (element) { return fs.statSync(element).isDirectory(); })
        .filter(function (directory) { return fs.existsSync(directory + "/node_modules"); });
};
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
