import React from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';

function Pokedex() {
  return (
    pokemons.map((pokemon) => (
      <Pokemon pokemon={pokemon} />
    ))
  );
}

export default Pokedex;
