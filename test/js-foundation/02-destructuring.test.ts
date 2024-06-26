import { characters } from '../../src/js-foundation/02-destructuring';

describe('Test in 02-destructuring', () => {
    test('characters shold contain Flash and Superman', () => {
        expect(characters).toContain('Superman');
        expect(characters).toContain('Flash');
    });

    test('first character should be Superman, and second Flash', () => {
        const [firstCharacter, secondCharacter] = characters

        expect(firstCharacter).toBe('Superman');
        expect(secondCharacter).toBe('Flash');
    })
});

