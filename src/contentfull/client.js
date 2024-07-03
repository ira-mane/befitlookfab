import * as contentful from 'contentful';

export const client = contentful.createClient({
    accessToken: import.meta.env.VITE_AccessToken,
    space: import.meta.env.VITE_space
})