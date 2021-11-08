const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let i

// Exercício 1
for (i = 0; i < numbers.length; i+=1) {
  console.log(numbers[i]);
}

// Exercício 2
let sum = 0;

for (i = 0; i < numbers.length; i+=1) {
  sum+=numbers[i];
}

console.log(sum);