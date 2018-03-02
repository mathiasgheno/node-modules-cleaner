#! /usr/bin/env node

const fs = require("fs");
const readline = require('readline');

export function listar() {
    console.log('You have this: ');
    console.log(listFolders());
}

export function remover() {

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    listar();

    rl.question('Do you want to remove this directory? (y/n) ', (answer) => {
        if (answer === 'yes' || answer == 'y') {
            console.log('removendo');
            listFolders().forEach((directory) => deleteFolder(`${directory}/node_modules`));
            console.log('completo');
            rl.close();
            process.exit(-1);
        } else {
            console.log('Have a nice day! :D');
            process.exit(-1);
        }
    });
}

const listFolders = () => {
    return fs.readdirSync(process.cwd())
        .map((element) => `${process.cwd()}/${element}`)
        .filter((element) => fs.statSync(element).isDirectory())
        .filter((directory) => fs.existsSync(`${directory}/node_modules`));
};

const deleteFolder = (path) => {
    if (fs.existsSync(path)) {
        fs.readdirSync(path).forEach((file) => {
            const curPath = `${path}/${file}`;
            if (fs.lstatSync(curPath).isDirectory())
                deleteFolder(curPath);
            else {
                fs.unlinkSync(curPath);
                printRemovedFile(curPath);
            }
        });
        fs.rmdirSync(path);
    }
};

const printRemovedFile = (file) => {
    readline.clearLine(process.stdout, 0);
    readline.cursorTo(process.stdout, 0, null);
    let text = `Removed file:  ${file}`;
    process.stdout.write(text);
};


