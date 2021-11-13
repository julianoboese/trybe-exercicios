// Exercício 1
function palindromeCheck(string) {
  const revertedString = string.split("").reverse().join("");
  if (revertedString === string) {
    return true;
  }
  return false;
}

function palindromeCheck2(string) {
  for (const letter in string) {
    if (string[letter] !== string[string.length - 1 - letter]) {
      return false;
    }
  }
  return true;
}

// Exercício 2
function highestIndex(array) {
  let highIndex = array[0];
  for (const index in array) {
    if (array[index] > array[highIndex]) {
      highIndex = index;
    }
  }
  return highIndex;
}

// Exercício 3
function smallestIndex(array) {
  let smallIndex = array[0];
  for (const index in array) {
    if (array[index] < array[smallIndex]) {
      smallIndex = index;
    }
  }
  return smallIndex;
}

// Exercício 4
function longestName(names) {
  let longName = names[0];
  for (const name in names) {
    if (names[name].length > longName.length) longName = names[name];
  }
  return longName;
}

// Exercício 5
function mostRepeated(numbers) {
  let mostRepeatedCount = 0;
  let mostRepeatedIndex;
  for (const number1 in numbers) {
    let count = 0;
    for (const number2 in numbers) {
      if (numbers[number2] === numbers[number1]) {
        count += 1;
      }
    }
    if (count > mostRepeatedCount) {
      mostRepeatedCount = count;
      mostRepeatedIndex = number1;
    }
  }
  return numbers[mostRepeatedIndex];
}

function mostRepeated2(numbers) {
  const numbersObject = {};
  for (const number of numbers) {
    if (numbersObject[number] === undefined) {
      numbersObject[number] = 1;
    } else {
      numbersObject[number] += 1;
    }
  }
  let mostRepeatedCount = 0;
  let mostRepeatedNumber;
  for (const property in numbersObject) {
    if (numbersObject[property] > mostRepeatedCount) {
      mostRepeatedCount = numbersObject[property];
      mostRepeatedNumber = property;
    }
  }
  return mostRepeatedNumber;
}

// Exercício 6
function sumFunction(n) {
  let sum = 0;
  for (let i = 1; i <= n; i += 1) {
    sum += i;
  }
  return sum;
}

// Exercício 7
function verifyEnding(word, ending) {
  const slicedWord = word.slice(word.length - ending.length, word.length);
  if (slicedWord === ending) {
    return true;
  }
  return false;
}
