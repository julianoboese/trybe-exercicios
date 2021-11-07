// Programa 1
const a = 30;
const b = 10;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// Programa 2
const c = 30;
const d = 10;
let result;

if (c > d) {
  result = c;
} else {
  result = d;
}

console.log(result);

// Programa 3
const e = 30;
const f = 10;
const g = 20;

if (e > f) {
  if (e > g) {
    result = e;
  } else {
    result = g;
  }
} else if (f > g) {
  result = f;
} else {
  result = g;
}

console.log(result);
