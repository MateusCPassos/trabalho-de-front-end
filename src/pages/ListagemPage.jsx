import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonCard from '../components/PokemonCard';
import DetalhesPokemon from '../components/DetalhesPokemon';
import './ListagemPage.css';

const ListagemPage = () => {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
        setPokemons(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handlePokemonClick = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  return (
    <div>
      <h1 className="centered-title">Lista de Pokémon</h1>
      <div className="pokemon-list">
        {selectedPokemon ? (
          <DetalhesPokemon pokemon={selectedPokemon} />
          
        ) : (
          pokemons.map((pokemon) => (
            <PokemonCard
              key={pokemon.name}
              name={pokemon.name}
              imageUrl={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`}
              types={['grass', 'poison']}
              onClick={() => handlePokemonClick(pokemon.url)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ListagemPage;
