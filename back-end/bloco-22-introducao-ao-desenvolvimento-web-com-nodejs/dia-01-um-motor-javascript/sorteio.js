const readlineSync = require('readline-sync');

let jogarNovamente = true;

while (jogarNovamente) {
  const numeroSelecionado = readlineSync.questionInt('Selecione um número: ');

  const numeroSorteado = Math.floor(11 * Math.random());

  console.log(numeroSelecionado === numeroSorteado
    ? 'Parabéns, número correto!'
    : `Opa, não foi dessa vez. O número era ${numeroSorteado}`);

  jogarNovamente = readlineSync.keyInYN('Deseja jogar novamente? ');
}
