const { jogar } = require('../src/services/game');

describe('Testando lógica do jogo Pedra, Papel e Tesoura', () => {
  test('Empate: pedra vs pedra', () => {
    expect(jogar('pedra', 'pedra')).toBe('Empate!');
  });

  test('Vitória: pedra vs tesoura', () => {
    expect(jogar('pedra', 'tesoura')).toBe('Você venceu!');
  });

  test('Derrota: pedra vs papel', () => {
    expect(jogar('pedra', 'papel')).toBe('Você perdeu!');
  });

  test('Erro: jogada inválida do jogador', () => {
    expect(() => jogar('banana', 'pedra')).toThrow('Escolha inválida');
  });

  test('Erro: jogada inválida do computador', () => {
    expect(() => jogar('pedra', 'lagarto')).toThrow('Computador inválido');
  });
});
