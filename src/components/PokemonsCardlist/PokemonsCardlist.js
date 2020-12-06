import React, { useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import './PokemonsCardlist.css'
import PokemonCard from "../PokemonCard/PokemonCard"
import {fetchPokemonsList} from "../../store/actions/pokemons"
import Navigation from "../Navigation/Navigation"

function PokemonsCardlist() {
    const state = useSelector(state => {
        return {
            pokemons: state.pokemons,
        }
    })

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPokemonsList());
    }, [])

    return (
        <>
            <Navigation/>
            <section className="pokemons-list">
                {state.pokemons.list ?
                    state.pokemons.list.map((item, index) => {
                        return (
                            <PokemonCard pokemon={item} key={`pokemon-${index}`}/>
                        )
                    })
                    :
                    null
                }
            </section>
        </>
    );
}

export default PokemonsCardlist;
