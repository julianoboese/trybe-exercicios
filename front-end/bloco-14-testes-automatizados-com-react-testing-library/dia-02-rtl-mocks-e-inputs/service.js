const generateRandomNumber = () => 100 * Math.random();

const convertToUpperCase = (string) => string.toUpperCase();

const getFirstLetter = (string) => string.charAt(0);

const concatStrings = (string1, string2) => string1 + string2;

module.exports = {
  generateRandomNumber,
  convertToUpperCase,
  getFirstLetter,
  concatStrings,
};
