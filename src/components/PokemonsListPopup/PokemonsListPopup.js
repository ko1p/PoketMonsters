import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import "./PokemonsListPopup.css"
import closeImg from '../../images/close.svg'
import {fetchPokemonInfoById, fetchPokemonsList} from "../../store/actions/pokemons";
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
                {console.log('renderComponent')}
                {
                    this.props.popup.isOpened ?
                        <div className="popup">
                            <div className="popup__container">
                                <img className="popup__close" src={closeImg} alt="close icon" onClick={this.props.popupClose}/>
                                <ul className="popup__list-items">
                                    {this.sortPokemonsByAlphabet(this.props.pokemons.list).map((pokemon, index) => {
                                        return (
                                            <Link to={{pathname: `/pokemons/${pokemon.id}`}} key={`pokemon-item-${index}`} onClick={this.props.popupClose}>
                                                <li className="popup__list-item">{pokemon.name}</li>
                                            </Link>
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
