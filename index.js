//chamar a biblioteca express
const express = require('express');

//armazenar na váriavel server a biblioteca express()
const server = express();

//chamar a função listen para "escutar a porta em que vamos utilizar"
server.listen(3500);

//Criando a ROTA get para testar a API
server.get('/teste', () => {
  console.log('Deu certooooo!!!!')
})