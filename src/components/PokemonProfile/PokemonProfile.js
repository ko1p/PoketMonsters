import React, {Component} from 'react';
import {connect} from 'react-redux'
import './PokemonProfile.css'
import PokemonsListPopup from "../PokemonsListPopup/PokemonsListPopup";
import Navigation from "../Navigation/Navigation";
import {fetchPokemonDescription, fetchPokemonInfoById} from "../../store/actions/pokemons";

class PokemonProfile extends Component {

    componentDidMount() {
        this.props.fetchPokemonInfoById(this.props.match.params.pokemonId)
        this.props.fetchPokemonDescription(this.props.match.params.pokemonId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.pokemonId !== this.props.match.params.pokemonId) {
            this.props.fetchPokemonInfoById(this.props.match.params.pokemonId)
            this.props.fetchPokemonDescription(this.props.match.params.pokemonId)
        }
    }

    pokemonListAbilities() {
        const abilities = this.props.pokemon.abilities.map(item => item.ability.name)
        return abilities.join(', ')[0].toUpperCase() + abilities.join(', ').slice(1)
    }

    render() {
        return (
            <>
                <Navigation />
                <section className="pokemon-profile">
                    <div className="pokemon__container">
                        <div className="pokemon__image">
                            <img
                                src={`https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/other/official-artwork/${this.props.match.params.pokemonId}.png`} alt="pikachu"/>
                        </div>
                        <div className="pokemon__num">
                            <span># {this.props.match.params.pokemonId}</span>
                        </div>
                        <h2 className="pokemon-profile__header">Description:</h2>
                        <p className="pokemon-profile__description">
                            {this.props.pokemon.description}
                            {console.log(this.props.pokemon.description)}
                        </p>
                        <h2 className="pokemon-profile__header">Info:</h2>
                        <div className="pokemon__info">
                            <span className="pokemon__ceil-info">Name:</span>
                            <span className="pokemon__ceil-info">{this.props.pokemon.name}</span>
                            <span className="pokemon__ceil-info">Height:</span>
                            <span className="pokemon__ceil-info">{this.props.pokemon.height / 10} m</span>
                            <span className="pokemon__ceil-info">Weight:</span>
                            <span className="pokemon__ceil-info">{this.props.pokemon.weight / 10} kg</span>
                            <span className="pokemon__ceil-info">Type:</span>
                            <span className="pokemon__ceil-info">{this.props.pokemon.types && this.props.pokemon.types[0].type.name}</span>
                            <span className="pokemon__ceil-info">Health points:</span>
                            <span className="pokemon__ceil-info"><progress className="pokemon__progress-info" value={this.props.pokemon.stats && this.props.pokemon.stats[0].base_stat} max="100" /></span>
                            <span className="pokemon__ceil-info">Attack:</span>
                            <span className="pokemon__ceil-info"><progress className="pokemon__progress-info" value={this.props.pokemon.stats && this.props.pokemon.stats[1].base_stat} max="100" /></span>
                            <span className="pokemon__ceil-info">Defense:</span>
                            <span className="pokemon__ceil-info"><progress className="pokemon__progress-info" value={this.props.pokemon.stats && this.props.pokemon.stats[2].base_stat} max="100" /></span>
                            <span className="pokemon__ceil-info">Special attack:</span>
                            <span className="pokemon__ceil-info"><progress className="pokemon__progress-info" value={this.props.pokemon.stats && this.props.pokemon.stats[3].base_stat} max="100" /></span>
                            <span className="pokemon__ceil-info">Special defense:</span>
                            <span className="pokemon__ceil-info"><progress className="pokemon__progress-info" value={this.props.pokemon.stats && this.props.pokemon.stats[4].base_stat} max="100" /></span>
                            <span className="pokemon__ceil-info">Speed:</span>
                            <span className="pokemon__ceil-info"><progress className="pokemon__progress-info" value={this.props.pokemon.stats && this.props.pokemon.stats[5].base_stat} max="100" /></span>
                        </div>
                        <div className="pokemon__abilities">
                            <h2 className="pokemon-profile__header">Abilities:</h2>
                            <span className="pokemon__abilities-list">{this.props.pokemon.abilities && this.pokemonListAbilities()}</span>
                        </div>
                    </div>
                </section>
                <PokemonsListPopup />
            </>
        )
    }
}

function mapStateToProps(state) {
    return {
        pokemon: state.pokemons.currentPokemon,
    }
}


function mapDispatchToProps(dispatch) {
    return {
        fetchPokemonInfoById: (id) => dispatch(fetchPokemonInfoById(id)),
        fetchPokemonDescription: (id) => dispatch(fetchPokemonDescription(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonProfile)
