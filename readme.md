# Node Modules Cleaner

Remova recursivamente o `node_modules` de uma pasta. Ideal para manter apenas o codigo base de uma pasta de projetos.

Recursively remove all `node_module` inside a folder. Ideal for keeping just the source code of a folder of project, like `WebstormProjects` folder.

## Installing

```bash
npm install @mga_/nmc
```

After the intallation you will be able to run `node-modules-cleaner --help` or the sort version `nmc --help`. 

## How to Use

To list all folders that have `node_modules`:

```bash
node-modules-cleaner --list
```

For more information:

```bash
node-modules-cleaner --help
```

To perform clean:

```bash
node-modules-cleaner
```

To list all subfolders that have `node_modules`:

```bash
node-modules-cleaner --listDeep
```

To remove subfolder that have `node_modules`:

```bash
node-modules-cleaner --deep
```



