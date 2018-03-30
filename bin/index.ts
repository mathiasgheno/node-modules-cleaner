#! /usr/bin/env node
let parametros : any = process.argv;
import { listAllNodeModules, remover, listAllNodeModulesDeep } from '../lib'

if(parametros.includes('--help')){
    console.log('Everything that you can do with this project: ');
    console.log('1. For now, nothing important');
} else if (parametros.includes('--list')) {
    console.log(listAllNodeModules());
} else if (parametros.includes('--deep')){
    remover(true);
} else if (parametros.includes('--listDeep')){
    console.log(listAllNodeModulesDeep(process.cwd()));
} else {
    remover();
}

// TODO adicionar o switch.