// Exercício 1
const employeesData = (fullName) => ({ fullName, email: `${fullName.toLowerCase().split(' ').join('_')}@trybe.com` });

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  };
  return employees;
};

console.log(newEmployees(employeesData));

// Exercício 2
const numberChecker = (myNumber, number) => myNumber === number;

const lotteryResult = (myNumber, callback) => {
  const winner = Math.floor((Math.random() * 5) + 1);
  return callback(myNumber, winner) ? 'Parabéns, você ganhou!' : 'Tente novamente.';
};

console.log(lotteryResult(2, numberChecker));

// Exercício 3
const finalResult = (studentAnswers, rightAnswers, callback) => {
  let count = 0;
  for (let i = 0; i < rightAnswers.length; i += 1) {
    const actionReturn = callback(studentAnswers[i], rightAnswers[i]);
    count += actionReturn;
  }
  return count;
};

const checkAnswers = (picked, right) => {
  if (picked === right) {
    return 1;
  } if (picked === 'N.A') {
    return 0;
  }
  return -0.5;
};

const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];

console.log(finalResult(STUDENT_ANSWERS, RIGHT_ANSWERS, checkAnswers));
