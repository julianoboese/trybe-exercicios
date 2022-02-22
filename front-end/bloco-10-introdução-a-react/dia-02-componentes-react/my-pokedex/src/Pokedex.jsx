import React from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';

function Pokedex() {
  return (
    <div className="cards">
      {pokemons.map((pokemon) => (
        <Pokemon pokemon={pokemon} />
      ))}
    </div>
  );
}

export default Pokedex;
