// Exercício 1
const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
  console.log(rectangleArea(...rectangle));
});

// Exercício 2
const sum = (...args) => args.reduce((acc, arg) => acc + arg, 0);

console.log(sum(1, 2, 3, 4, 5));

// Exercício 3
const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
};

const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
};

const personLikes = ({ name, age, likes }) => `${name} is ${age} years old and likes ${likes.join(', ')}.`;

console.log(personLikes(alex));
console.log(personLikes(gunnar));

// Exercício 4
const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

const filterPeople = (peopleArray) => `${peopleArray
  .filter(({ bornIn, nationality }) => bornIn > 1900 && bornIn <= 2000
  && nationality === 'Australian')
  .map(({ name }) => name)
  .join(', ')}.`;

console.log(filterPeople(people));

// Exercício 5
const myList = [1, 2, 3];

const listSwap = ([a, b, c]) => [c, b, a];

console.log(listSwap(myList));

// Exercício 6
const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

const toObject = ([model, brand, year]) => ({ model, brand, year });

console.log(toObject(palio));
console.log(toObject(shelbyCobra));
console.log(toObject(chiron));

// Exercício 7
const ships = [
  {
    name: 'Titanic',
    length: 269.1,
    measurementUnit: 'meters',
  },
  {
    name: 'Queen Mary 2',
    length: 1132,
    measurementUnit: 'feet',
  },
  {
    name: 'Yamato',
    length: 256,
    measurementUnit: 'meters',
  },
];

const shipLength = ({ name, length, measurementUnit }) => `${name} is ${length} ${measurementUnit} long`;

console.log(shipLength(ships[0]));
console.log(shipLength(ships[1]));
console.log(shipLength(ships[2]));

// Exercício 8
