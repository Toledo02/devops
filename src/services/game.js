function jogar(escolhaJogador, escolhaComputador) {
  const opcoes = ['pedra', 'papel', 'tesoura'];

  if (!opcoes.includes(escolhaJogador)) {
    throw new Error('Escolha inválida. Use pedra, papel ou tesoura.');
  }

  if (!opcoes.includes(escolhaComputador)) {
    throw new Error('Computador inválido.');
  }

  if (escolhaJogador === escolhaComputador) {
    return 'Empate!';
  }

  if (
    (escolhaJogador === 'pedra' && escolhaComputador === 'tesoura') ||
    (escolhaJogador === 'papel' && escolhaComputador === 'pedra') ||
    (escolhaJogador === 'tesoura' && escolhaComputador === 'papel')
  ) {
    return 'Você venceu!';
  }

  return 'Você perdeu!';
}

module.exports = { jogar };
