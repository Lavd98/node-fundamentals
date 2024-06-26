import { getId } from '../../src/plugins/get-id.plugin';

describe('Test in plugins/get-id', () => {
    test('getId should return a string', () => {
        expect(typeof getId()).toBe('string');
    });
});