const request = require('supertest');
const app = require('../src/app');

describe('Testando rotas básicas', () => {
  test('Deve retornar status 200 na rota /health', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
  });

  test('Deve retornar status 200 e mensagem na rota /', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('Servidor rodando');
  });

  test('Deve retornar mensagem na rota /jogo', async () => {
    const res = await request(app).get('/jogo');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('Pedra, Papel e Tesoura');
  });
});

describe('Testando rota do jogo', () => {
  test('Deve retornar resultado válido ao escolher pedra', async () => {
    const res = await request(app).get('/jogo/pedra');
    expect(res.statusCode).toBe(200);
    expect(['Você venceu!', 'Você perdeu!', 'Empate!']).toContain(res.body.resultado);
  });

  test('Deve retornar erro ao passar escolha inválida', async () => {
    const res = await request(app).get('/jogo/banana');
    expect(res.statusCode).toBe(400);
    expect(res.text).toContain('Escolha inválida');
  });
});
