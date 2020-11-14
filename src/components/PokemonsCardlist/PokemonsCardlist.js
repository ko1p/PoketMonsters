import React, {Component} from 'react';
import {connect} from 'react-redux'
import './PokemonsCardlist.css'
import PokemonCard from "../PokemonCard/PokemonCard";
import {fetchPokemonsList} from "../../store/actions/pokemons";

class PokemonsCardlist extends Component {

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
