#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let parametros = process.argv;
const lib_1 = require("../lib");
if (parametros.includes('--help')) {
    console.log('Everything that you can do with this project: ');
    console.log('1. For now, nothing important');
    process.exit(-1);
}
else if (parametros.includes('--list')) {
    lib_1.listFolders();
    process.exit(-1);
}
else if (parametros.includes('--listDeep')) {
    console.log(lib_1.listFoldersDeep());
    process.exit(-1);
}
else {
    lib_1.remover();
    process.exit(-1);
}
//# sourceMappingURL=index.js.map