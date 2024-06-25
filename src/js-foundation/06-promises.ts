import { httpClientPlugin } from "../plugins/http-client.plugin";

export const getPokemonNameById = async(id: string | number): Promise<string>=> {

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    const pokemon = await httpClientPlugin.get(url);

    return pokemon.name;
    // return fetch(url)
    //     .then((response) =>  response.json())
    //     .then((pokemon) => pokemon.name);
    // return 'pokemon'
}