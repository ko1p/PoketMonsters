import React from 'react'
import './PokemonCard.css'

export default function PokemonCard(props) {
    return(
        <div className="pokemon-card">
            {props.pokemon.name}
        </div>
    )
}
