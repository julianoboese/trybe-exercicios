import readlineSync = require('readline-sync');

const units = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];

function convert(value: number, fromUnit: string, toUnit: string): number {
  const fromIndex = units.indexOf(fromUnit);
  const toIndex = units.indexOf(toUnit);

  return value * 10 ** (toIndex - fromIndex);
}

function exec(): void {
  const value = readlineSync.questionFloat('Type the value to convert: ');
  const fromUnitIndex = readlineSync.keyInSelect(units, 'From which unit?');
  const toUnitIndex = readlineSync.keyInSelect(units, 'To which unit?');

  const fromUnit = units[fromUnitIndex];
  const toUnit = units[toUnitIndex];
  const convertedValue = convert(value, fromUnit, toUnit);

  console.log(`${value}${fromUnit} is equal to ${convertedValue}${toUnit}`);
}

exec();
