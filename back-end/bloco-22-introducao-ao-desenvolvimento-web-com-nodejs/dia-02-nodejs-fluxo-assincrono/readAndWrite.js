const fs = require('fs').promises;

async function readAndWrite() {
  const strings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

  await Promise.all(strings.map((string, index) => fs.writeFile(`file${index + 1}.txt`, string)));

  const files = [
    'file1.txt',
    'file2.txt',
    'file3.txt',
    'file4.txt',
    'file5.txt',
  ];

  const filesText = await Promise.all(files.map((file) => fs.readFile(file, 'utf-8')));
  fs.writeFile('fileAll.txt', filesText.join(' '));
}

readAndWrite();
