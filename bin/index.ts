#! /usr/bin/env node
let parametros : any = process.argv;
import { listFolders, remover, listFoldersDeep } from '../lib'

if(parametros.includes('--help')){
    console.log('Everything that you can do with this project: ');
    console.log('1. For now, nothing important');
    process.exit(-1);
} else if (parametros.includes('--list')) {
    listFolders();
    process.exit(-1);
} else if (parametros.includes('--listDeep')){
    console.log(listFoldersDeep());
    process.exit(-1);
} else {
    remover();
    process.exit(-1);
}
