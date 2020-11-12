import React, {Component} from 'react';
import axios from 'axios'
import './PokemonsCardlist.css'
import PokemonCard from "../PokemonCard/PokemonCard";

export default class PokemonsCardlist extends Component {

    state = {
        pokemons: null,
    }

    async getPokemons () {
        const url = `https://pokeapi.co/api/v2/pokemon?limit=150`
        const data = await axios.get(url)
        return(data.data.results)
    }

    async componentDidMount() {
        const pokemons = await this.getPokemons()
        this.setState({ pokemons })
    }

    render() {
        return (
            <section className="pokemons-list">
                {   this.state.pokemons ?
                    (this.state.pokemons.map((item, index) => {
                        return(
                            <PokemonCard pokemon={item} key={`pokemon-${index}`}/>
                        )
                    }))
                    :
                    (<h1>Загружаю покемонов...</h1>)
                }
            </section>
        );
    }
}
