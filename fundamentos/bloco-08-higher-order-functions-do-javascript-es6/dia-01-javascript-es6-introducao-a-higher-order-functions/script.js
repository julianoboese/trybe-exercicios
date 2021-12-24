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

// Bônus

// Parte I
const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage() {
    const maxDmg = this.strength * this.weaponDmg;
    return Math.floor(Math.random() * (maxDmg - this.strength + 1) + this.strength);
  },
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage() {
    const minDmg = 15;
    return Math.floor(Math.random() * (this.strength - minDmg + 1) + minDmg);
  },
};

const battleMembers = { mage, warrior, dragon };

const mageAttack = () => {
  let turnStats = { manaSpent: 0, damageDealt: 'Não possui mana suficiente.' };

  if (mage.mana >= 15) {
    const minDmg = mage.intelligence;
    const maxDmg = mage.intelligence * 2;
    const mageDmg = Math.floor(Math.random() * (maxDmg - minDmg + 1) + minDmg);
    turnStats = { manaSpent: 15, damageDealt: mageDmg };
  }
  return turnStats;
};

const warriorAttack = () => {
  const minDmg = warrior.strength;
  const maxDmg = warrior.strength * warrior.weaponDmg;
  const warriorDmg = Math.floor(Math.random() * (maxDmg - minDmg + 1) + minDmg);
  return warriorDmg;
};

const dragonAttack = () => {
  const minDmg = 15;
  const maxDmg = dragon.strength;
  const dragonDmg = Math.floor(Math.random() * (maxDmg - minDmg + 1) + minDmg);
  return dragonDmg;
};

// Parte 2
const gameActions = {
  mageTurn(attack) {
    const manaConsumed = attack(mage).manaSpent;
    const mageDamage = attack(mage).damageDealt;
    mage.mana -= manaConsumed;
    mage.damage = mageDamage;
    dragon.healthPoints -= mageDamage;
  },
  warriorTurn(attack) {
    const warriorDamage = attack(warrior);
    warrior.damage = warriorDamage;
    dragon.healthPoints -= warriorDamage;
  },
  dragonTurn(attack) {
    const dragonDamage = attack(dragon);
    dragon.damage = dragonDamage;
    mage.healthPoints -= dragonDamage;
    warrior.healthPoints -= dragonDamage;
  },
  turnResults: battleMembers,
};

gameActions.mageTurn(mageAttack);
gameActions.warriorTurn(warriorAttack);
gameActions.dragonTurn(dragonAttack);

console.log(gameActions.turnResults);
