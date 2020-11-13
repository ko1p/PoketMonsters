import React, {Component} from 'react';
import {connect} from 'react-redux'
import "./PokemonsListPopup.css"
import closeImg from '../../images/close.svg'
import {fetchPokemonsList} from "../../store/actions/pokemons";
import {popupClose, popupOpen} from "../../store/actions/popup";

class PokemonsListPopup extends Component {

    componentDidMount() {
        this.props.fetchPokemonsList() // TODO: временно
        console.log(this.props.popup)
    }

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
            <>
                {
                    this.props.popup.isOpened ?
                        <div className="popup">
                            <div className="popup__container">
                                <img className="popup__close" src={closeImg} alt="close icon" onClick={this.props.popupClose}/>
                                <ul className="popup__list-items">
                                    {this.sortPokemonsByAlphabet(this.props.pokemons.list).map((pokemon, index) => {
                                        return (
                                            <a href={`https://localhost:3000/pokemons/${pokemon.id}`}>
                                                <li className="popup__list-item" key={`pokemon-item-${index}`}>{pokemon.name}</li>
                                            </a>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                        :
                        null
                }
            </>
        )
    }
}

function mapStateToProps(state) {
    return {
        pokemons: state.pokemons,
        popup: state.popup,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchPokemonsList: () => dispatch(fetchPokemonsList()),
        popupOpen: () => dispatch(popupOpen()),
        popupClose: () => dispatch(popupClose()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonsListPopup);
