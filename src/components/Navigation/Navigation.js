import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {useParams, withRouter} from 'react-router'
import './Navigation.css'
import backImg from '../../images/back.svg'

function Navigation() {
    const state = useSelector(state => ({pokemons: state.pokemons}));
    const pokemonId = useParams().pokemonId;

    const sortPokemonsByAlphabet = (arr) => {
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

    return (
        <nav className="nav">
            <ul className="nav__links">
                {
                    pokemonId &&
                    <Link to={{pathname: "/"}} className="nav__link"><img className="nav__back" src={backImg}
                                                                          alt="back arrow"/> На
                        главную</Link>
                }
                <div className="dropdown nav__link">
                    <span>Список покемонов</span>
                    <div className="dropdown-content">
                        {
                            sortPokemonsByAlphabet(state.pokemons.list).map((pokemon, index) => {
                                return (
                                    <Link className="dropdown__link" to={{pathname: `/pokemons/${pokemon.id}`}}
                                          key={`pokemon-item-${index}`}>
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

export default withRouter(Navigation);
