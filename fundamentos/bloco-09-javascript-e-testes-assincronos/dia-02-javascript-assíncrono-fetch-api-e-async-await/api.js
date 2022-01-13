const fetchCrypto = () => {
  const list = document.getElementById('cryptos');

  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  fetch('https://api.coincap.io/v2/assets', requestOptions)
    .then((response) => response.json())
    .then(({ data }) => {
      data
        .filter((_, index) => index <= 10)
        .forEach(({ name, symbol, priceUsd }) => {
          const listItem = document.createElement('li');
          listItem.innerHTML = `${name} (${symbol}): $ ${parseFloat(priceUsd).toFixed(2)}`;
          list.appendChild(listItem);
        });
    })
    .catch((error) => console.log('error', error));
};

window.onload = fetchCrypto();
