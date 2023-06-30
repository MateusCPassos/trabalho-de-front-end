import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonCard from '../components/PokemonCard';
import DetalhesPokemon from './DetalhesPokemon';
import './ListagemPage.css';
import { Link } from 'react-router-dom';

const ListagemPage = () => {
  const [pokemonsData, setPokemonsData] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const [page, setPage] = useState("https://pokeapi.co/api/v2/pokemon");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(page);
        setPokemonsData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [page]);

  const handlePokemonClick = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  return (
    <div className="listagem-page">
      <h1 className="centered-title">Lista de Pokémon</h1>
      <div className="pokemon-list">
        {pokemonsData.results ? (
          <>
            {pokemonsData.results.map((pokemon) => (
              <Link to={"/" + pokemon.name} key={pokemon.name}>
                <PokemonCard
                  name={pokemon.name}
                  imageUrl={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`}
                  types={['grass', 'poison']}
                  onClick={() => handlePokemonClick(pokemon)}
                  className="pokemon-card"
                />
              </Link>
            ))}
          </>
        ) : null}
      </div>

      <div className="button-container">
        <button onClick={() => setPage(pokemonsData.previous)}>anterior</button>
        <button onClick={() => setPage(pokemonsData.next)}>proxima</button>
      </div>
    </div>
  );
};

export default ListagemPage;
