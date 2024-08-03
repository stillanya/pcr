import React from 'react';
import './PokemonCard.css';

function PokemonCard({ pokemon }) {
    return (
        <div className="pokemon-card">
            <h2>{pokemon.name}</h2>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
    );
}
export default PokemonCard;