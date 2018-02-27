const fs = require("fs");

fs.readdir(__dirname, (err, elements) => {
    elements.map((element) => `${__dirname}/${element}`)
            .filter((element) => fs.statSync(element).isDirectory())
            .filter((directory) => fs.existsSync(`${directory}/node_modules`))
            .forEach((directory) => deleteFolder(`${directory}/node_modules`));
    console.log('completo');
});


const deleteFolder = (path) => {
    if (fs.existsSync(path)) {
        fs.readdirSync(path).forEach((file) => {
            const curPath = `${path}/${file}`;
            if (fs.lstatSync(curPath).isDirectory())
                deleteFolder(curPath);
            else
                fs.unlinkSync(curPath);
        });
        fs.rmdirSync(path);
    }
};