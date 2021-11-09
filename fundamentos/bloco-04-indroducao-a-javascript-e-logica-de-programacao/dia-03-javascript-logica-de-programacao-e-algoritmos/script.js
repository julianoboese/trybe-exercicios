// Exercício 1
const n = 7;
let line = "";

for (let i = 1; i <= n; i += 1) {
  line += "*";
}

for (let i = 1; i <= n; i += 1) {
  console.log(line);
}

// Exercício 2
line = "";

for (let i = 1; i <= n; i += 1) {
  line += "*";
  console.log(line);
}

// Exercício 3
line = "";

for (let i = 1; i <= n; i += 1) {
  for (let j = 1; j <= n; j += 1) {
    if (j <= n - i) {
      line += " ";
    } else {
      line += "*";
    }
  }
  console.log(line);
  line = "";
}

// Exercício 4
line = "";
const numberOfLines = (n + 1) / 2;

for (let i = 1; i <= numberOfLines; i += 1) {
  for (let j = 1; j <= n; j += 1) {
    if (j <= numberOfLines - i || j >= numberOfLines + i) {
      line += " ";
    } else {
      line += "*";
    }
  }
  console.log(line);
  line = "";
}

// Exercício 5
line = "";

if (n % 2 === 0) {
  console.log("n must be odd");
} else {
  for (let i = 1; i <= numberOfLines; i += 1) {
    for (let j = 1; j <= n; j += 1) {
      if (j === numberOfLines - i + 1 || j === numberOfLines + i - 1 || i === numberOfLines) {
        line += "*";
      } else {
        line += " ";
      }
    }
    console.log(line);
    line = "";
  }
}
