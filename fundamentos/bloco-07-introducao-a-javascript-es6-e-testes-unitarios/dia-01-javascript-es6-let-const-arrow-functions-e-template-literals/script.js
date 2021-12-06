// Parte 1

// Exercício 1
function testingScope(escopo) {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope += ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);

// Exercício 2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];
oddsAndEvens.sort((a, b) => a - b);
console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);

// Parte 2

// Exercício 1
const factorial = (number) => (number < 1 ? 1 : number * factorial(number - 1));
console.log(factorial(6));

// Exercício 2
const longestWord = (phrase) => phrase.split(' ').sort((a, b) => b.length - a.length)[0];
console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

// Exercício 3
// const cnt = document.querySelector('span');
// cnt.innerHTML = 0;
// document.querySelector('button')
//   .addEventListener('click', () => { (cnt.innerHTML = parseInt(cnt.innerHTML, 10) + 1); });

// Exercício 4

const replaceString = (string) => 'Tryber x aqui!'.replace('x', string);
const skills = ['HTML', 'CSS', 'JavaScript'];
const joinString = (string) => {
  let result = `${replaceString(string)} Minhas principais habilidades são:`;
  skills.forEach((skill) => {
    (result = `${result}
  
  - ${skill}`);
  });
  result = `${result}
  
  #goTrybe`;

  return result;
};
console.log(joinString('Juliano'));
