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

// Programa 4
// Utilizando if
const h = 0;

if (h > 0) {
  result = "positive";
} else if (h < 0) {
  result = "negative";
} else {
  result = "zero";
}

console.log(result);

// Utilizando switch
switch (h / Math.abs(h)) {
  case 1:
    result = "positive";
    break;
  case -1:
    result = "negative";
    break;
  default:
    result = "zero";
    break;
}

console.log(result);

// Programa 5
const angle1 = 60;
const angle2 = 90;
const angle3 = 30;

if (angle1 <= 0 || angle2 <= 0 || angle3 <= 0) {
  result = "Error: all the angles must be positive";
} else if (angle1 >= 180 || angle2 >= 180 || angle3 >= 180) {
  result = "Error: no angle can be greater than 180";
} else if (angle1 + angle2 + angle3 === 180) {
  result = true;
} else {
  result = false;
}

console.log(result);
