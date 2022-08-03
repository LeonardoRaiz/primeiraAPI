# Primeira API 
Primeiro exemplo de api para o curso

## Instalação do yarn

Instalar o gerenciador de pacote YARN se o node for >= 16.10

```bash
corepack enable
```

Instalar o gerenciador de pacote YARN se o node for < 16.10

```bash
npm i -g corepack
```
## Criação do package.json

Entrar na pasta de criação e digitar o código:

```bash
yarn init -y
```

Neste novo arquivo gerado `package.json` poderemos colocar os controles, as referências, as bibliotecas, etc... do projeto

## Inserindo o Express no projeto

É necessário instalar a dependência express no projeto:

```bash
yarn add express
```

> Nota: Caso for persistir no GIT crie um arquivo `.gitignore`