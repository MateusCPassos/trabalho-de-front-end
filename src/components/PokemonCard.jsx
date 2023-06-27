import './PokemomCard.css';
import React from 'react';

const PokemonCard = ({ name, imageUrl, types, onClick }) => {
  return (
    <div className="pokemonCard" onClick={onClick}>
      <h3>{name}</h3>
      <img src={imageUrl} alt={name} />
      <p>Tipos: {types.join(', ')}</p>
    </div>
  );
};

export default PokemonCard;
