#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let parametros = process.argv;
const lib_1 = require("../lib");
if (parametros.includes('--help')) {
    console.log('Everything that you can do with this project: ');
    console.log('1. For now, nothing important');
}
else if (parametros.includes('--list')) {
    lib_1.listar();
    process.exit(-1);
}
else {
    lib_1.remover();
}
//# sourceMappingURL=index.js.map