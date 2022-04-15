#! /usr/bin/env node
let parametros : any = process.argv;
import { listAllNodeModules, remover, listAllNodeModulesDeep } from '../lib'

if(parametros.includes('--help')){
    console.log('Options of this project: ');
    console.log('1. --list');
    console.log('2. --deep');
    console.log('2. --listDeep');
} else if (parametros.includes('--list')) {
    console.log(listAllNodeModules());
} else if (parametros.includes('--deep')){
    remover(true);
} else if (parametros.includes('--listDeep')){
    console.log(listAllNodeModulesDeep(process.cwd()));
} else {
    remover();
}
