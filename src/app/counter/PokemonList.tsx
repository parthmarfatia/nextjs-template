'use client';
import React, { useState } from 'react';
import { useGetPokemonByNameQuery } from '../../redux/api/pokemonApi';

const PokemonList: React.FC = () => {
  const [pokemonNames, setPokemonNames] = useState<string[]>(['pikachu', 'bulbasaur', 'charmander']);
  const [selectedPokemon, setSelectedPokemon] = useState<string | null>(null);

  const { data: pokemon, error, isLoading } = useGetPokemonByNameQuery(selectedPokemon!, {
    skip: !selectedPokemon,
  });

  const handleFetchPokemon = (name: string) => {
    setSelectedPokemon(name);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Pokemon List</h1>
      <ul>
        {pokemonNames.map((name) => (
          <li key={name}>
            <button
              className="bg-blue-500 text-white px-4 py-2 m-2 rounded"
              onClick={() => handleFetchPokemon(name)}
            >
              {name}
            </button>
          </li>
        ))}
      </ul>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error fetching Pokémon.</p>}
      {pokemon && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold">{pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
      )}
    </div>
  );
};

export default PokemonList;
