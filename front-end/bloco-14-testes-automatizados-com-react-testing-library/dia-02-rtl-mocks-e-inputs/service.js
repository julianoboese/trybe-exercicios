const generateRandomNumber = () => 100 * Math.random();

const convertToUpperCase = (string) => string.toUpperCase();

const getFirstLetter = (string) => string.charAt(0);

const concatStrings = (string1, string2) => string1 + string2;

const fetchDogImage = async () => {
  const apiResponse = await fetch('https://dog.ceo/api/breeds/image/random');
  const responseJson = await apiResponse.json();
  return responseJson;
};

module.exports = {
  generateRandomNumber,
  convertToUpperCase,
  getFirstLetter,
  concatStrings,
  fetchDogImage,
};
