// Exercício 9
const { getPokemonDetails } = require('./pokemon');

describe('A função getPokemonDetails', () => {
  it('retorna erro quando procuramos um pokemon que não existe no banco de dados', (done) => {
    getPokemonDetails((pokemon) => pokemon.name === 'Pikachu', (error, message) => {
      expect(error).toEqual(new Error('Não temos esse pokémon para você :('));
      expect(message).toBeNull();
      done();
    });
  });

  it('retorna um pokemon que existe no banco de dados', (done) => {
    getPokemonDetails((pokemon) => pokemon.name === 'Charmander', (error, message) => {
      expect(error).toBeNull();
      expect(message).toBe('Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember');
      done();
    });
  });
});
