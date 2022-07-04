const units = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];

function convert(value: number, fromUnit: string, toUnit: string): number {
  const fromIndex = units.indexOf(fromUnit);
  const toIndex = units.indexOf(toUnit);

  return value * 10 ** (toIndex - fromIndex);
}
