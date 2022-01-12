// Exercício 3
const getPlanet = () => {
  const mars = {
    name: 'Mars',
    distanceFromSun: {
      value: 227900000,
      measurementUnit: 'kilometers',
    },
  };
  console.log('Returned planet: ', mars);
};

// setTimeout(() => getPlanet(), 4000); // imprime Marte depois de 4 segundos

// Exercício 4
const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const sendMarsTemperature = () => setTimeout(() => {
  console.log(`Mars temperature is: ${getMarsTemperature()} degrees Celsius`);
}, messageDelay());

sendMarsTemperature(); // imprime "Mars temperature is: 20 degrees Celsius", por exemplo
