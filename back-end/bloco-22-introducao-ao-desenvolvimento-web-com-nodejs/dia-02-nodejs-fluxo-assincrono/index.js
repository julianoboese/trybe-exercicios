function checkValue(a, b, c) {
  return new Promise((resolve, reject) => {
    const value = (a + b) * c;

    if (Number.isNaN(value)) {
      reject(new Error('Informe apenas números'));
    }

    if (value < 50) {
      reject(new Error('Valor muito baixo'));
    }

    resolve(value);
  });
}

console.log(checkValue(5, 5, 6));
