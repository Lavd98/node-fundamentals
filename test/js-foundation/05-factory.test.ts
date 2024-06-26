import { builMakePerson } from '../../src/js-foundation/05-factory';

describe('Test in 05-factory', () => {
    const getId = () => '123';
    const getAge = () => 30;

    test('buildMakePerson should return a function', () => {
        const makePerson = builMakePerson({getId, getAge});
        expect(typeof makePerson).toBe('function');
    })

    test('makePerson should return a person', () => {
        const makePerson = builMakePerson({getId, getAge});
        const { id, name, birthdate, age } = makePerson({name: 'Luis', birthdate: '1998-05-08'});
        // expect(typeof { id, name, birthdate, age }).toBe('object');
        expect(id).toBe('123');
        expect(name).toBe('Luis');
        expect(birthdate).toBe('1998-05-08');
        expect(age).toBe(30);
    })
});