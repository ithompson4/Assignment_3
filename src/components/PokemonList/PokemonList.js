import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Import Components
import PokemonCard from '../PokemonCard/PokemonCard';
import Loading from '../Dashboard/Loading';

function PokemonList() {
  const [pokemon, setData] = useState([]);

  useEffect(() => {
      const fetchData = async () => {axios.get('https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0')
      .then((response) => {
        setData(response.data['results']);
      }).catch(err => {
        console.log(err);
        return null;
    });}
    fetchData();
  }, []);

  return (
    <div>
      {pokemon ? (
        <div className="row">
          {pokemon.map(pokemon => (
            <PokemonCard
              key={pokemon.name}
              name={pokemon.name}
              url={pokemon.url}
            />
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default PokemonList;
