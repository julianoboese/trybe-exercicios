// Exercício 1
function romanToNumber(roman) {
  let romanNumber = roman.toLowerCase();
  let conversion = {
    i: 1,
    v: 5,
    x: 10,
    l: 50,
    c: 100,
    d: 500,
    m: 1000,
  };

  let len = romanNumber.length;
  let number = conversion[romanNumber[0]];
  for (let index = 0; index < len - 1; index += 1) {
    if (conversion[romanNumber[index]] >= conversion[romanNumber[index + 1]]) {
      number += conversion[romanNumber[index + 1]];
    } else {
      number =
        number +
        conversion[romanNumber[index + 1]] -
        2 * conversion[romanNumber[index]];
    }
  }
  return number;
}

// Exercício 2
function arrayOfNumbers(vector) {
  let evenArray = [];
  for (var i = 0; i < vector.length; i++) {
    for (var j = 0; j < vector[i].length; j++) {
      if (vector[i][j] % 2 === 0) {
        evenArray.push(vector[i][j]);
      }
    }
  }
  return evenArray;
}

// Exercício 3
function organizedBasket(basket) {
  let basketObject = {};
  for (let item of basket) {
    if (basketObject[item] === undefined) {
      basketObject[item] = 1;
    } else {
      basketObject[item] += 1;
    }
  }

  let basketArray = [];
  for (let item in basketObject) {
    let message = `${basketObject[item]} ${item}`;
    if (basketObject[item] !== 1) {
      message += `s`;
    }
    basketArray.push(message);
  }
  return `Sua cesta possui: ${basketArray.join(", ")}.`;
}

//= ---------------------------------------------------------------- =//

let moradores = {
  blocoUm: [
    {
      nome: "Luiza",
      sobrenome: "Guimarães",
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: "William",
      sobrenome: "Albuquerque",
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: "Murilo",
      sobrenome: "Ferraz",
      andar: 8,
      apartamento: 804,
    },
    {
      nome: "Zoey",
      sobrenome: "Brooks",
      andar: 1,
      apartamento: 101,
    },
  ],
};

// Exercício 4
let moradoresBlocoDois = moradores.blocoDois;
let ultimoMoradorBlocoDois = moradoresBlocoDois[moradoresBlocoDois.length - 1];

console.log(
  `O morador do bloco 2 de nome ${ultimoMoradorBlocoDois.nome} ${ultimoMoradorBlocoDois.sobrenome} mora no ${ultimoMoradorBlocoDois.andar}º andar, apartamento ${ultimoMoradorBlocoDois.apartamento}`
);

// Exercício 5
for (let key in moradores) {
  for (let index of moradores[key]) {
    console.log(`${index.nome} ${index.sobrenome}`);
  }
}
