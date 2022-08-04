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

> Nota: Caso for persistir no GIT crie um arquivo `.gitignore` para não fazer upload de todos os modulos.

Logo após será adicionado o seguinte código no `package.json`

```json
"dependencies": {
    "express": "^4.18.1"
  }
```

## Crindo o arquivo index.js

Com as dependências criadas, vamos criar o arquivo principal da nossa API `index.js`

Dentro do arquivos vamos aos códigos: 

```JavaScript
//chamar a biblioteca express
const express = require('express');

//armazenar na váriavel server a biblioteca express()
const server = express();

//chamar a função listen para "escutar a porta em que vamos utilizar"
server.listen(3500);
```

É hora de tentar acessar a primeira rota! Precisa-se criar uma pequena rota de exemplo:

```JavaScript
//Criando a ROTA get para testar a API
server.get('/teste', () => {
  console.log('Deu certooooo!!!!')
})
```

O teste é chamado por:

```bash
node index.js
```

E acessando:

[localhost:3500/teste](http://localhost:3500/teste)