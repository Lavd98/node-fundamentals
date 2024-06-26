import { getUserById } from '../../src/js-foundation/03-callback';

describe('Test in 03-callback', () => {
    test('getUserById should return an error User', () => {
        const id = 10;
        getUserById(id, (err, user) => {
            expect(err).toEqual(`User ${id} not found`);
            expect(user).toBeUndefined();
        });
    });

    test('getUserById should return an User', () => {
        const id = 1;
        const userMock =  {
            id: 1,
            name: 'Fernando' 
         };

        getUserById(id, (err, user) => {
            expect(err).toBeUndefined();
            expect(user).toEqual(userMock);
        });
    });
});