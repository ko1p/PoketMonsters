import React from 'react'
import {Link} from "react-router-dom"
import './PokemonCard.css'

export default function PokemonCard(props) {
    return(
        <Link to={`/pokemons/${props.pokemon.id}`} style={{textDecoration: 'none'}} >
            <div className="pokemon-card">
                <div className="pokemon-card__image" style={{backgroundImage: `url(${props.pokemon.imgUrl}`}}>

                </div>
                <div className="pokemon-card__info" >
                    <span className="pokemon-card__name">{props.pokemon.name}</span>
                </div>
            </div>
        </Link>
    )
}
