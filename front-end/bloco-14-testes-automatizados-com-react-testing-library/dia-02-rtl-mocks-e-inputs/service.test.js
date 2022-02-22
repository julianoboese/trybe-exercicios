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

  service.generateRandomNumber.mockRestore();
  expect(service.generateRandomNumber).not.toHaveBeenCalled();

  service.generateRandomNumber = jest.fn().mockImplementation((a) => 2 * a);

  expect(service.generateRandomNumber(8)).toBe(16);
  expect(service.generateRandomNumber).toHaveBeenCalledTimes(1);
  expect(service.generateRandomNumber).toHaveBeenCalledWith(8);
});
