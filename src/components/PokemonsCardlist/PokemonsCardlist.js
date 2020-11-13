import React, {Component} from 'react';
import {connect} from 'react-redux'
import './PokemonsCardlist.css'
import PokemonCard from "../PokemonCard/PokemonCard";
import {fetchPokemonsList} from "../../store/actions/pokemons";

class PokemonsCardlist extends Component {

    state = {}

    async getPokemons () {
        // const url = `https://pokeapi.co/api/v2/pokemon?limit=150`
        // const data = await axios.get(url)
        // const results = data.data.results
        // const pokemonsList = results.map(item => {
        //     const pokemonId = item.url.match(/\/\d{1,4}\//g).toString().replace(/\//g, "")
        //     const imgUrl = `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`
        //     const info = {
        //         name: item.name,
        //         imgUrl: imgUrl,
        //     }
        //     return info
        // })
        // return pokemonsList
    }

    componentDidMount() {
        this.props.fetchPokemonsList()
    }

    render() {
        return (
            <section className="pokemons-list">
                {console.log(this.props.pokemons, 'Рендер')}
                {   this.props.pokemons.list ?
                    this.props.pokemons.list.map((item, index) => {
                        return(
                            <PokemonCard pokemon={item} key={`pokemon-${index}`}/>
                        )
                    })
                    :
                    null
                }
            </section>
        );
    }
}

function mapStateToProps(state) {
    return {
        pokemons: state.pokemons,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchPokemonsList: () => dispatch(fetchPokemonsList())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonsCardlist)
