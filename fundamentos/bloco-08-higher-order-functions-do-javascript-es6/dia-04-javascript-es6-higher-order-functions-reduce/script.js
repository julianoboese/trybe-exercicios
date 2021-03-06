// Exercício 1
const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const flatten = () => arrays.reduce((acc, curr) => acc.concat(curr), []);

console.log(flatten());

// -----//
const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Exercício 2
const reduceNames = () => books.reduce((acc, book, index, array) => (
  index === array.length - 1 ? `${acc} ${book.author.name}.` : `${acc} ${book.author.name},`), '')
  .trim();

console.log(reduceNames());

// Exercício 3
const averageAge = () => {
  const sum = books.reduce((acc, book) => acc + (book.releaseYear - book.author.birthYear), 0);
  return sum / books.length;
};

console.log(averageAge());

// Exercício 4
const longestNamedBook = () => books.reduce((longest, book) => (
  book.name.length > longest.name.length ? book : longest
));

console.log(longestNamedBook());

// Exercício 5
const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const containsA = () => names.reduce((acc, name) => (
  acc + name.split('').reduce((acc2, letter) => (
    letter.toLowerCase() === 'a' ? acc2 + 1 : acc2
  ), 0)
), 0);

console.log(containsA());

// Exercício 6
const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const studentAverage = () => students.map((student, index) => (
  {
    name: student,
    average: grades[index].reduce((acc, grade) => acc + grade) / grades[index].length,
  }
));

console.log(studentAverage());
