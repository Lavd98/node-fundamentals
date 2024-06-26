import axios from 'axios';

export const httpClientPlugin = {
    get: async(url: string) => {
        // const response = await fetch(url);
        // const data = await response.json();
        // return data;

        const { data } = await axios.get(url);
        return data;
    },
    post: async(url: string, body: any) => {
        throw new Error('Not implemented');
    },
    put: async(url: string, body: any) => {
        throw new Error('Not implemented');
    },
    delete: async(url: string) => {
        throw new Error('Not implemented');
    },
}
