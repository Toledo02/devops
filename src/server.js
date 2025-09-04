const app = require('./app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`✅ Server listening on http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Servidor rodando! 🚀');
});

app.get('/jogo', (req, res) => {
  res.send('Aqui vai o Pedra, Papel e Tesoura!');
});
