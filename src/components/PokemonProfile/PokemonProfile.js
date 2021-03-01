import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import './PokemonProfile.css'
import Navigation from "../Navigation/Navigation";
import {fetchPokemonDescription, fetchPokemonInfoById} from "../../store/actions/pokemons";
import {useParams} from "react-router";

function PokemonProfile() {
    const state = useSelector(state => ({pokemon: state.pokemons.currentPokemon}));
    const dispatch = useDispatch();
    const pokemonId = useParams().pokemonId;

    useEffect(() => {
        dispatch(fetchPokemonInfoById(pokemonId));
        dispatch(fetchPokemonDescription(pokemonId));
        // eslint-disable-next-line
    }, [pokemonId])


    function toUpperCaseFirstLetter(str) {
        return str[0].toUpperCase() + str.slice(1)
    }

    function pokemonListAbilities() {
        const abilities = state.pokemon.abilities.map(item => item.ability.name)
        return abilities.join(', ')[0].toUpperCase() + abilities.join(', ').slice(1)
    }

    return (
        <>
            <Navigation/>
            <section className="pokemon-profile">
                <div className="pokemon__container">
                    <div className="pokemon__image">
                        <img
                            src={`https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`}
                            alt="pikachu" style={{width: '80%'}}/>
                    </div>
                    <div className="pokemon__num">
                        <span># {state.pokemon.id}</span>
                    </div>
                    <h2 className="pokemon-profile__header">Description:</h2>
                    <p className="pokemon-profile__description">
                        {state.pokemon.description}
                    </p>
                    <h2 className="pokemon-profile__header">Info:</h2>
                    <div className="pokemon__info">
                        <span className="pokemon__ceil-info">Name:</span>
                        <span
                            className="pokemon__ceil-info">{state.pokemon.name && toUpperCaseFirstLetter(state.pokemon.name)}</span>
                        <span className="pokemon__ceil-info">Height:</span>
                        <span className="pokemon__ceil-info">{state.pokemon.height / 10} m</span>
                        <span className="pokemon__ceil-info">Weight:</span>
                        <span className="pokemon__ceil-info">{state.pokemon.weight / 10} kg</span>
                        <span className="pokemon__ceil-info">Type:</span>
                        <span
                            className="pokemon__ceil-info">{state.pokemon.types && toUpperCaseFirstLetter(state.pokemon.types[0].type.name)}</span>
                        <span className="pokemon__ceil-info">Health points:</span>
                        <span className="pokemon__ceil-info"><progress className="pokemon__progress-info"
                                                                       value={state.pokemon.stats && state.pokemon.stats[0].base_stat}
                                                                       max="100"/></span>
                        <span className="pokemon__ceil-info">Attack:</span>
                        <span className="pokemon__ceil-info"><progress className="pokemon__progress-info"
                                                                       value={state.pokemon.stats && state.pokemon.stats[1].base_stat}
                                                                       max="100"/></span>
                        <span className="pokemon__ceil-info">Defense:</span>
                        <span className="pokemon__ceil-info"><progress className="pokemon__progress-info"
                                                                       value={state.pokemon.stats && state.pokemon.stats[2].base_stat}
                                                                       max="100"/></span>
                        <span className="pokemon__ceil-info">Special attack:</span>
                        <span className="pokemon__ceil-info"><progress className="pokemon__progress-info"
                                                                       value={state.pokemon.stats && state.pokemon.stats[3].base_stat}
                                                                       max="100"/></span>
                        <span className="pokemon__ceil-info">Special defense:</span>
                        <span className="pokemon__ceil-info"><progress className="pokemon__progress-info"
                                                                       value={state.pokemon.stats && state.pokemon.stats[4].base_stat}
                                                                       max="100"/></span>
                        <span className="pokemon__ceil-info">Speed:</span>
                        <span className="pokemon__ceil-info"><progress className="pokemon__progress-info"
                                                                       value={state.pokemon.stats && state.pokemon.stats[5].base_stat}
                                                                       max="100"/></span>
                    </div>
                    <div className="pokemon__abilities">
                        <h2 className="pokemon-profile__header">Abilities:</h2>
                        <span
                            className="pokemon__abilities-list">{state.pokemon.abilities && pokemonListAbilities()}</span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PokemonProfile;
