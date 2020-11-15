import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import './Navigation.css'
import backImg from '../../images/back.svg'

class Navigation extends Component {

    sortPokemonsByAlphabet = (arr) => { // TODO: вынести в экшены
        return arr.sort((a, b) => {
            if (a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }
            return 0;
        })
    }

    render() {
        return (
            <nav className="nav">
                <ul className="nav__links">
                    {
                        this.props.match.params.pokemonId && <Link to={{pathname: "/"}} className="nav__link"><img className="nav__back" src={backImg} /> На главную</Link>
                    }
                    <div className="dropdown nav__link">
                        <span>Список покемонов</span>
                        <div className="dropdown-content">
                            {
                                this.sortPokemonsByAlphabet(this.props.pokemons.list).map((pokemon, index) => {
                                    return (
                                        <Link className="dropdown__link" to={{pathname: `/pokemons/${pokemon.id}`}} key={`pokemon-item-${index}`}>
                                            <li className="dropdown__item">{pokemon.name}</li>
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    </div>
                </ul>
            </nav>
        )
    }
}


function mapStateToProps(state) {
    return {
        pokemons: state.pokemons,
    }
}

export default connect(mapStateToProps, null)(withRouter(Navigation))
