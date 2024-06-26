import { getPokemonNameById } from '../../src/js-foundation/06-promises';

describe('Test in 06-promises', () => {
    test('getPokemonNameById', async() => {
        const pokemonName = await getPokemonNameById(4);
        expect(pokemonName).toBe('charmander');
    });

    test('should return an error ifPokemonName does not exist', async() => {
        const idPokemon = 1000000;
        
        try {
            const pokemonName = await getPokemonNameById(idPokemon);
            expect(true).toBe(false);
            
        } catch (error) {
            expect(error).toBe(`Pokemon not found with id ${idPokemon}`)
        }
    })
})