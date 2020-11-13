const initialState = {
    list: [],
}

export default function pokemonsReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_POKEMONS_NAMES": {
            return {
                ...state,
                list: [
                    ...action.payload
                ]
            }
        }
        default:
            return state
    }
}
