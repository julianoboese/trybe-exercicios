const fs = require('fs').promises;

async function readData(filePath) {
  const fileText = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(fileText);
}

async function printChars() {
  const chars = await readData('./simpsons.json');
  chars.forEach((char) => {
    console.log(`${char.id} - ${char.name}`);
  });
}

async function getCharById(id) {
  const chars = await readData('./simpsons.json');

  const selectedChar = chars.find((char) => Number(char.id) === id);

  if (!selectedChar) {
    throw new Error('id não encontrado');
  }

  console.log(selectedChar);
}

async function removeChars() {
  const chars = await readData('./simpsons.json');

  const filteredChars = chars
    .filter(((char) => Number(char.id) !== 6 && Number(char.id) !== 10));

  await fs.writeFile('./simpsons.json', JSON.stringify(filteredChars));
}

async function createSimpsonFamily() {
  const chars = await readData('./simpsons.json');

  const simpsonFamily = chars.filter(((char) => Number(char.id) <= 4));

  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonFamily));
}

async function addToFamily() {
  const simpsonFamily = await readData('./simpsonsFamily.json');

  simpsonFamily.push({ id: '8', name: 'Nelson Muntz' });

  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonFamily));
}

async function replaceFamily() {
  let simpsonFamily = await readData('./simpsonsFamily.json');

  simpsonFamily = simpsonFamily.filter(((char) => Number(char.id) !== 8));

  simpsonFamily.push({ id: '15', name: 'Maggie Simpson' });

  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonFamily));
}

async function main() {
  printChars();
  getCharById(1);
  removeChars();
  await createSimpsonFamily();
  await addToFamily();
  await replaceFamily();
}

main();
