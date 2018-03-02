#! /usr/bin/env node


let parametros : any = process.argv;
import {listar, remover} from '../lib'

if(parametros.includes('--help')){
    console.log('Everything that you can do with this project: ');
    console.log('1. For now, nothing important');
} else if (parametros.includes('--list')) {
    listar();
    process.exit(-1);
} else {
    remover();
}
