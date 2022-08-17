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

  return res.send( `<!DOCTYPE html>
  <html>
    <body style="text-align: center">
  
      <h1 >Desafio!</h1>
      <h1> Bem vindo <b style="color:red">${nomes[index]}</b></h1> 
      <p>Você acabou de fazer uma interação Backend com Frontend. Parabéns! </p>
    </body>
  </html> `);
})

