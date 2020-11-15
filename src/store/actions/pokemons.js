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

export function fetchPokemonInfoById(id) {
    return async dispatch => {
        try {
            console.log(id)
            const url = `https://pokeapi.co/api/v2/pokemon/${id}`
            const data = await axios.get(url)
            const result = data.data
            console.log(result)
            dispatch(fetchPokemonInfoByIdSucces(result))
        } catch (e) {
            console.log(e)
        }
    }
}

function fetchPokemonInfoByIdSucces(info) {
    return {
        type: "ADD_CURRENT_POKEMON_INFO",
        payload: info,
    }
}

export function fetchPokemonDescription(pokemonId) {
    return async dispatch => {
        try {
            const url = `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`
            const data = await axios.get(url)
            const result = data.data.flavor_text_entries
            let pokemonDescription;
            result.some(item => {
                if (item.language.name === 'en') {
                    pokemonDescription = item.flavor_text.replace(/\/g, ' ')
                    return true
                }
                return item.flavor_text
            })
            dispatch(fetchPokemonDescriptionSuccess(pokemonDescription))
        } catch(e) {
            console.log(e)
        }
    }
}

function fetchPokemonDescriptionSuccess(info) {
    return {
        type: "ADD_POKEMON_DESCRIPTION",
        payload: info,
    }
}
