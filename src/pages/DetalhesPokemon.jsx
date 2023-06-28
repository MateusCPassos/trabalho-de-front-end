import React, { useCallback, useEffect, useState } from 'react';
import './DetalhesPokemon.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DetalhesPokemon = () => {
  const [pokemon, setPokemon] = useState()
  const { name } = useParams()

  const fetchPokemonData = useCallback(async () => {
    try {
      const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon/" + name);
      setPokemon(data)
    } catch (error) {
    }
  }, []);

  useEffect(() => {
    fetchPokemonData()
  }, [])

  return (
    <div className="detalhes-container">
      {pokemon ?
        <>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.sprites.other['dream_world'].front_default} alt={pokemon.name} />
          <p>Tipos: {pokemon.types ? pokemon.types.map(item => <b key={item.type.name}>{item.type.name}</b>) : ''}</p>
          <p>Habilidades: {pokemon.abilities ? pokemon.abilities.map(item => <b key={item.ability.name}>{item.ability.name}</b>) : ''}</p>
        </>
        : ''}

    </div>
  );
};

export default DetalhesPokemon;
