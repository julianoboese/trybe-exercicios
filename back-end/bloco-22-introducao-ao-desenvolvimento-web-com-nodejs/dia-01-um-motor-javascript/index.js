const readlineSync = require('readline-sync');
const { calcularImc } = require('./imc');
const { calcularVelocidade } = require('./velocidade');
const { fazerSorteio } = require('./sorteio');

const scripts = [
  { name: 'Calcular IMC', script: calcularImc },
  { name: 'Calcular velocidade média', script: calcularVelocidade },
  { name: 'Jogo de adivinhação', script: fazerSorteio },
];

function main() {
  const scriptEscolhido = readlineSync.keyInSelect(
    scripts.map((script) => script.name),
    'Selecione um script para executar',
  );

  if (scriptEscolhido === -1) {
    console.log('Número inválido. Saindo...');
  } else {
    scripts[scriptEscolhido].script();
  }
}

main();
