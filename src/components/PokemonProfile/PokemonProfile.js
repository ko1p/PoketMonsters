import React from 'react';
import './PokemonProfile.css'
import PokemonsListPopup from "../PokemonsListPopup/PokemonsListPopup";

export default function PokemonProfile() {
    return (
        <>
            <section className="pokemon-profile">
                <div className="pokemon__container">
                    <div className="pokemon__image">
                        <img
                            src="https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/other/official-artwork/25.png" alt="pikachu"/>
                    </div>
                        <ul className="pokemon__info">
                            <li className="pokemon__num"><span># 25</span></li>
                            <li className="pokemon__name">
                                <span>Name: </span>
                                <span>Pikachu</span>
                            </li>
                            <li className="pokemon__height">
                                <span>Height: </span>
                                <span>0.6 </span>
                                <span>m</span>
                            </li>
                            <li className="pokemon__weight">
                                <span>Weight: </span>
                                <span>6 </span>
                                <span>kg</span>
                            </li>
                            <li className="pokemon__type">
                                <span>Type: </span>
                                <span>static</span>
                            </li>
                        </ul>
                </div>
            </section>
        </>
    )
}
