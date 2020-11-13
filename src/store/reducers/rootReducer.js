import {combineReducers} from 'redux'
import pokemonsReducer from "./pokemonsReducer";
import popupReducer from "./popupReducer";

export default combineReducers({
    pokemons: pokemonsReducer,
    popup: popupReducer,
})
