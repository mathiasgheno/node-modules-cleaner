#! /usr/bin/env node
"use strict";
exports.__esModule = true;
var parametros = process.argv;
var lib_1 = require("../lib");
if (parametros.includes('--help')) {
    console.log('Everything that you can do with this project: ');
    console.log('1. For now, nothing important');
}
else if (parametros.includes('--list')) {
    lib_1.listar();
}
else {
    lib_1.remover();
}
