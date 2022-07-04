import readlineSync = require('readline-sync');

const scripts = [
  { name: 'Convert length', script: './length' },
  { name: 'Convert mass', script: './mass' },
  { name: 'Convert capacity', script: './capacity' },
  { name: 'Convert area', script: './area' },
  { name: 'Convert volume', script: './volume' },
];

const conversion = readlineSync.keyInSelect(scripts.map((item) => item.name), 'Select the conversion type:');

require(scripts[conversion].script);
