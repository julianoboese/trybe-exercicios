import readlineSync = require('readline-sync');

const units = ['km³', 'hm³', 'dam³', 'm³', 'dm³', 'cm³', 'mm³'];

function convert(value: number, fromUnit: string, toUnit: string): number {
  const fromIndex = units.indexOf(fromUnit);
  const toIndex = units.indexOf(toUnit);

  return value * 10 ** (3 * (toIndex - fromIndex));
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
