//chamar a biblioteca express
const express = require('express');

//armazenar na váriavel server a biblioteca express()
const server = express();

//chamar a função listen para "escutar a porta em que vamos utilizar"
server.listen(3500);

const nomes = ['Clark', 'Lois', 'Bruce', 'Harley', 'Jason', 'Hal'];

// Aquisição do array e amostragem de cada nome dado seu index
server.get('/teste/:index', (req, res) => {
  const { index } = req.params;

  return res.json(nomes[index]);
})

