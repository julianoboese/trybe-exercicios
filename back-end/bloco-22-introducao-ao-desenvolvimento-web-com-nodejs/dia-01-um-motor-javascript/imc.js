const readlineSync = require('readline-sync');

const peso = readlineSync.questionFloat('Qual seu peso? ');
const altura = readlineSync.questionFloat('Qual sua altura? ');

const imc = peso / altura ** 2;

let situação;
if (imc < 18.5) {
  situação = 'Abaixo do peso (magreza)';
} else if (imc < 25) {
  situação = 'Peso normal';
} else if (imc < 30) {
  situação = 'Acima do peso (sobrepeso)';
} else if (imc < 35) {
  situação = 'Obesidade grau I';
} else if (imc < 40) {
  situação = 'Obesidade grau II';
} else {
  situação = 'Obesidade graus III e IV';
}
console.log(imc.toFixed(2), situação);
