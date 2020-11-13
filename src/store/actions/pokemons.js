import axios from "axios";

export function fetchPokemonsList() {
    return async dispatch => {
        try {
            const url = `https://pokeapi.co/api/v2/pokemon?limit=150`
            const data = await axios.get(url)
            const results = data.data.results
            const pokemonsList = results.map(item => {
                const pokemonId = item.url.match(/\/\d{1,4}\//g).toString().replace(/\//g, "")
                const imgUrl = `https://github.com/PokeAPI/sprites/raw/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`
                const capitaliseName = item.name[0].toUpperCase() + item.name.slice(1)
                const info = {
                    name: capitaliseName,
                    imgUrl: imgUrl,
                    id: pokemonId,
                }
                return info
            })
            dispatch(fetchPokemonsListSuccess(pokemonsList))
            console.log(pokemonsList, 'сформированный массив')
        } catch (e) {
            console.log(e, "произошла ошибка при загрузке списка покемонов")
        }
    }
}

function fetchPokemonsListSuccess(list) {
    return {
        type: "ADD_POKEMONS_NAMES",
        payload: list,
    }
}
