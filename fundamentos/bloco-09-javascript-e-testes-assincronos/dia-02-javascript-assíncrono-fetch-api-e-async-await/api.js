// Exercício 2
const fetchCrypto = async () => {
  const list = document.getElementById('cryptos');

  const currencyResponse = await fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/brl.json');
  const currencyData = await currencyResponse.json();
  const conversionFactor = currencyData.brl;
  console.log(conversionFactor);

  fetch('https://api.coincap.io/v2/assets')
    .then((response) => response.json())
    .then(({ data }) => {
      data
        .filter((_, index) => index <= 10)
        .forEach(({ name, symbol, priceUsd }) => {
          const listItem = document.createElement('li');
          listItem.innerHTML = `${name} (${symbol}): R$ ${parseFloat(priceUsd * conversionFactor).toFixed(2)}`;
          list.appendChild(listItem);
        });
    })
    .catch((error) => console.log('error', error));
};

window.onload = () => {
  fetchCrypto();
};
