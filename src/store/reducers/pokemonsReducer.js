const initialState = {
    list: [],
    currentPokemon: {},
}

export default function pokemonsReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_POKEMONS_NAMES": { // TODO переделать имя
            return {
                ...state,
                list: [
                    ...action.payload
                ]
            }
        }
        case "ADD_CURRENT_POKEMON_INFO": {
            return {
                ...state,
                currentPokemon: {
                    ...state.currentPokemon,
                    ...action.payload
                }
            }
        }
        case "ADD_POKEMON_DESCRIPTION": {
            return {
                ...state,
                currentPokemon: {
                    description: action.payload
                }
            }
        }
        default:
            return state
    }
}
