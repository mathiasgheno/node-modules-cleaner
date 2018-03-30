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
    console.log(lib_1.listAllNodeModules());
}
else if (parametros.includes('--deep')) {
    lib_1.remover(true);
}
else if (parametros.includes('--listDeep')) {
    console.log(lib_1.listAllNodeModulesDeep(process.cwd()));
}
else {
    lib_1.remover();
}
//# sourceMappingURL=index.js.map