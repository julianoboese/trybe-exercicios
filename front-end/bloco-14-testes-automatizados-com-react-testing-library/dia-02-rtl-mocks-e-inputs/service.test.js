const service = require('./service');

test('Testa a função generateRandomNumber com mockReturnValue', () => {
  service.generateRandomNumber = jest.fn().mockReturnValue(10);

  expect(service.generateRandomNumber()).toBe(10);
  expect(service.generateRandomNumber).toHaveBeenCalled();

  expect(service.generateRandomNumber()).toBe(10);
  expect(service.generateRandomNumber).toHaveBeenCalledTimes(2);
});

test('Testa a função generateRandomNumber com mockImplementation', () => {
  service.generateRandomNumber = jest.fn()
    .mockImplementationOnce((a, b) => a / b)
    .mockReturnValue(10);

  expect(service.generateRandomNumber(10, 2)).toBe(5);
  expect(service.generateRandomNumber).toHaveBeenCalled();
  expect(service.generateRandomNumber).toHaveBeenCalledWith(10, 2);

  expect(service.generateRandomNumber()).toBe(10);
  expect(service.generateRandomNumber).toHaveBeenCalledTimes(2);
});

test('Testa a função generateRandomNumber com mockImplementation e mockReset', () => {
  service.generateRandomNumber = jest.fn().mockImplementationOnce((a, b, c) => a * b * c);

  expect(service.generateRandomNumber(3, 4, 5)).toBe(60);
  expect(service.generateRandomNumber).toHaveBeenCalled();
  expect(service.generateRandomNumber).toHaveBeenCalledWith(3, 4, 5);

  service.generateRandomNumber.mockReset();
  expect(service.generateRandomNumber).not.toHaveBeenCalled();

  service.generateRandomNumber = jest.fn().mockImplementation((a) => 2 * a);

  expect(service.generateRandomNumber(8)).toBe(16);
  expect(service.generateRandomNumber).toHaveBeenCalledTimes(1);
  expect(service.generateRandomNumber).toHaveBeenCalledWith(8);
});

test('Testa a função convertToUpperCase com jest.spyOn', () => {
  const convertToLowerCase = jest.spyOn(service, 'convertToUpperCase')
    .mockImplementation((string) => string.toLowerCase());

  expect(convertToLowerCase('JuLiAnO')).toBe('juliano');
  expect(convertToLowerCase).toHaveBeenCalled();
  expect(convertToLowerCase).toHaveBeenCalledWith('JuLiAnO');

  service.convertToUpperCase.mockRestore();

  expect(service.convertToUpperCase('JuLiAnO')).toBe('JULIANO');
});

test('Testa as funções getFirstLetter e concatStrings com mockImplementation', () => {
  service.getFirstLetter = jest.fn()
    .mockImplementation((string) => string.charAt(string.length - 1));

  expect(service.getFirstLetter('Juliano')).toBe('o');
  expect(service.getFirstLetter).toHaveBeenCalled();
  expect(service.getFirstLetter).toHaveBeenCalledWith('Juliano');

  service.concatStrings = jest.fn()
    .mockImplementation((string1, string2, string3) => string1 + string2 + string3);

  expect(service.concatStrings('Juliano', ' é', ' legal')).toBe('Juliano é legal');
  expect(service.concatStrings).toHaveBeenCalled();
  expect(service.concatStrings).toHaveBeenCalledWith('Juliano', ' é', ' legal');
});
