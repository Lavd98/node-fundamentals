// import { getAge } from './../../src/plugins/get-age.plugin';
import * as ageModule from './../../src/plugins/get-age.plugin';


describe('Test in get-age.plugin.ts', () => {
    test('should return a year old', () => {
        const birthdate = '1998-05-08'
        const age = ageModule.getAge(birthdate);
        expect(typeof age).toBe('number');
        expect(age).toBe(26);
    });

    test('getAge should return 0 years', () => {
        const spy = jest.spyOn(ageModule, 'getAge').mockReturnValue(0);
        const birthdate = '1998-05-08';
        const age = ageModule.getAge(birthdate)
        // const result = getAge(birthdate);

        expect(age).toBe(0);
        expect(spy).toHaveBeenCalled();

        spy.mockRestore();
    });

    test('should handle age calculation around new year', () => {
        const today = new Date();
        const birthYear = today.getFullYear() - 20;
        const birthdate = `${birthYear}-12-31`;
        expect(ageModule.getAge(birthdate)).toBe(19);
    });

    test('should return an Error when birthdate is not provided', () => {
        const result = ageModule.getAge('');
        expect(result).toBeInstanceOf(Error);
        expect(result.message).toBe('birthdate is required');
    });
});