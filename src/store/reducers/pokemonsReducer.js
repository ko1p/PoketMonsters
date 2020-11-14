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
            console.log('payload')
            return {
                ...state,
                currentPokemon: {
                    ...action.payload
                }
            }
        }
        default:
            return state
    }
}
