// Exercício 7
const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

test('Tests if uppercase returns all letters in upper case', (done) => {
  uppercase('juliano', (str) => {
    try {
      expect(str).toBe('JULIANO');
      done();
    } catch (error) {
      done(error);
    }
  });
});
