const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let i;

// Exercício 1
for (i = 0; i < numbers.length; i += 1) {
  console.log(numbers[i]);
}

// Exercício 2
let sum = 0;

for (i = 0; i < numbers.length; i += 1) {
  sum += numbers[i];
}

console.log(sum);

// Exercício 3
sum = 0;

for (i = 0; i < numbers.length; i += 1) {
  sum += numbers[i];
}

let average = sum / numbers.length;

console.log(average);

// Exercício 4
sum = 0;

for (i = 0; i < numbers.length; i += 1) {
  sum += numbers[i];
}

average = sum / numbers.length;

if (average > 20) {
  console.log("valor maior que 20");
} else {
  console.log("valor menor ou igual a 20");
}

// Exercício 5
let higherNumber = numbers[0];

for (i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > higherNumber) {
    higherNumber = numbers[i];
  }
}

console.log(higherNumber);

// Exercício 6
let oddNumbers = 0;

for (i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 2 !== 0) {
    oddNumbers += 1;
  }
}

if (oddNumbers === 0) {
  console.log("nenhum valor ímpar encontrado")
} else {
  console.log(oddNumbers);
}

