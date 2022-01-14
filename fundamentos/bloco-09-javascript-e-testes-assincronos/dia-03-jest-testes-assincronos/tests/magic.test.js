/**
 * @jest-environment jsdom
 */

require('../simulator/fetchSimulator');
const { getMagicCard } = require('../src/magic');
const { card } = require('../simulator/card');

describe('Testa a função getMagicCard', () => {
  // Exercício 1 - Adiciona async/await
  it('2 - Deve possuir a propriedade name com o valor Ancestor\'s Chosen', async () => {
    const response = await getMagicCard('130550');
    expect(response.name).toBe('Ancestor\'s Chosen');
  });

  it('3 - Deve ser uma função', async () => {
    expect(typeof getMagicCard).toBe('function');
  });

  it('4 - Com o argumento "130550", a função fetch deve ser chamada', async () => {
    await getMagicCard('130550');
    expect(fetch).toHaveBeenCalled();
  });

  it('5 - Com o argumento "130550", a função fetch deve ser chamada com o endpoint correto', async () => {
    await getMagicCard('130550');
    expect(fetch).toHaveBeenCalledWith('https://api.magicthegathering.io/v1/cards/130550');
  });

  it('6 - Deve retornar o objeto correto', async () => {
    const response = await getMagicCard('130550');
    expect(response).toEqual(card);
  });

  it('7 - Com o argumento "idDesconhecido", retorna a mensagem de erro', async () => {
    const response = await getMagicCard('idDesconhecido');
    expect(response).toEqual(new Error('Id is not found!'));
  });
});
