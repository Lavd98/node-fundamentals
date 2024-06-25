import axios from 'axios';

export const httpClientPlugin = {
    get: async(url: string) => {
        // const response = await fetch(url);
        // const data = await response.json();
        // return data;

        const response = await axios.get(url);
        return response.data;
    },
    post: async(url: string, body: any) => {},
    put: async(url: string, body: any) => {},
    delete: async(url: string) => {},
}
