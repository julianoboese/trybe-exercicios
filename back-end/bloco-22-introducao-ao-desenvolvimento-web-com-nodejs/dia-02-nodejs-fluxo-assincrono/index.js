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

function checkRandomValue() {
  const a = Math.floor(Math.random() * 100 + 1);
  const b = Math.floor(Math.random() * 100 + 1);
  const c = Math.floor(Math.random() * 100 + 1);

  checkValue(a, b, c)
    .then((value) => console.log(value))
    .catch((error) => console.log(error));
}

checkRandomValue();

async function checkRandomValue2() {
  const a = Math.floor(Math.random() * 100 + 1);
  const b = Math.floor(Math.random() * 100 + 1);
  const c = Math.floor(Math.random() * 100 + 1);

  try {
    const value = await checkValue(a, b, c);
    console.log(value);
  } catch (error) {
    console.log(error);
  }
}

checkRandomValue2();
