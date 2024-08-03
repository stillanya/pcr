import React, { useState, useEffect } from 'react';
import './App.css';
import PokemonCard from './PokemonCard';

function App() {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=50')
            .then(response => response.json())
            .then(data => {
                const promises = data.results.map(pokemon =>
                    fetch(pokemon.url).then(res => res.json())
                );
                return Promise.all(promises);
            })
            .then(detailedData => {
                setPokemons(detailedData);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="app">
            <h1>Pokemon List</h1>
            <div className="pokemon-container">
                {pokemons.map((pokemon, index) => (
                    <PokemonCard key={index} pokemon={pokemon} />
                ))}
            </div>
        </div>
    );
}

export default App;
