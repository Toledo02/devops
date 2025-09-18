const express = require('express');
const app = express();
app.use(express.json());

// rotas
const healthRouter = require('./routes/health.routes');
app.use('/health', healthRouter);

app.get('/', (req, res) => {
  res.send('Servidor rodando! 🚀');
});

app.get('/jogo', (req, res) => {
  res.send('Aqui vai o Pedra, Papel e Tesoura!');
});

const { jogar } = require('./services/game');
app.get('/jogo/:escolha', (req, res) => {
  const { escolha } = req.params;
  const opcoes = ['pedra', 'papel', 'tesoura'];

  if (!opcoes.includes(escolha)) {
    return res.status(400).send('Escolha inválida. Use pedra, papel ou tesoura.');
  }

  const escolhaComputador = opcoes[Math.floor(Math.random() * opcoes.length)];
  const resultado = jogar(escolha, escolhaComputador);

  res.json({ jogador: escolha, computador: escolhaComputador, resultado });
});

module.exports = app;
