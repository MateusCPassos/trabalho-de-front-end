import React from 'react';
import './DetalhesPokemon.css';

const DetalhesPokemon = ({ pokemon }) => {
  return (
    <div className="detalhes-container">
      <h2>{pokemon.name}</h2>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt={pokemon.name} />
      <p>Tipos: {pokemon.types ? pokemon.types.join(', ') : ''}</p>
      <p>Habilidades: {pokemon.abilities ? pokemon.abilities.join(', ') : ''}</p>
    </div>
  );
};

export default DetalhesPokemon;
