const units = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];

function convert(value: number, fromUnit: string, toUnit: string): number {
  const fromIndex = units.indexOf(fromUnit);
  const toIndex = units.indexOf(toUnit);

  return value * 10 ** (toIndex - fromIndex);
}
