# Node Modules Cleaner

Remova recursivamente o `node_modules` de uma pasta. Ideal para manter apenas o codigo base de uma pasta de projetos.

## Instalação

```bash
npm install @mga_/nmc
```

## Como Usar

Para listar as pastas que possuem o node-modules

```bash
node-modules-cleaner --list
```

Para mais informações

```bash
node-modules-cleaner --help
```

Para limpar

```bash
node-modules-cleaner
```

Para listar as subpastas que contêm node_modules

```bash
node-modules-cleaner --listDeep
```

Para remover as sub-pastas com node-modules.

```bash
node-modules-cleaner --deep
```

# TODO List

1. Adicionar funcionalidades assync.
2. Adicionar barra de progresso ao remover.
3. Adicionar cores nos outputs.
4. Melhorar apresentação de output.
5. Suporte a monorepos



