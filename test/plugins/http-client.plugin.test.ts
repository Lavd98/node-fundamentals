import { httpClientPlugin } from '../../src/plugins/http-client.plugin';

describe('Test in plugin/http-client', () => {
    test('httpClientPlugin.get() should return a string', async() => {
        const url = 'https://jsonplaceholder.typicode.com/todos/1';
        const data = await httpClientPlugin.get(url);
        expect(data).toEqual({
            userId: 1,
            id: 1,
            title: "delectus aut autem",
            completed: false
            });
    });

    test('httpClientPlugin should have POST, PUT and DELETE methods', async() => {
        expect(typeof httpClientPlugin.post).toBe('function');
        expect(typeof httpClientPlugin.put).toBe('function');
        expect(typeof httpClientPlugin.delete).toBe('function');
        expect(typeof httpClientPlugin.get).toBe('function');
    });

    test('httpClientPlugin should throw an error when using method post()', async () => {
        const url = 'https://jsonplaceholder.typicode.com/todos/1';
        await expect(httpClientPlugin.post(url, {})).rejects.toThrow('Not implemented');
    });

    test('httpClientPlugin should throw an error when using method delete()', async () => {
        const url = 'https://jsonplaceholder.typicode.com/todos/1';
        await expect(httpClientPlugin.delete(url)).rejects.toThrow('Not implemented');
    });

    test('httpClientPlugin should throw an error when using method put()', async () => {
        const url = 'https://jsonplaceholder.typicode.com/todos/1';
        await expect(httpClientPlugin.put(url, {})).rejects.toThrow('Not implemented');
    });
});