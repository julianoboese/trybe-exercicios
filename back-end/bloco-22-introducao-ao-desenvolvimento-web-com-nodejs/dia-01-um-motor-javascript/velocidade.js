const readlineSync = require('readline-sync');

const distancia = readlineSync.questionInt('Qual a distância? ');
const tempo = readlineSync.questionInt('Qual o tempo? ');

const velocidade = distancia / tempo;

console.log(velocidade.toFixed(2));
