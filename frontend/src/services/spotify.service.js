import axios from 'axios'
//import { authHeader } from '../helpers/auth-helpers'

export const spotifyService = {
    albums,
    albumTracks,
}

async function albums(query) {
    const options = {
        method: 'GET',
        url: 'https://spotify23.p.rapidapi.com/search/',
        params: {
            q: `${query}`,
            type: 'albums',
            offset: '0',
            limit: '30',
            numberOfTopResults: '5',
        },
        headers: {
            'X-RapidAPI-Key': `${process.env.VUE_APP_RAPIDAPI_KEY}`,
            'X-RapidAPI-Host': `${process.env.VUE_APP_RAPIDAPI_HOST}`,
        },
    }
    return axios
        .request(options)
        .then((response) => {
            return response.data.albums.items
        })
        .catch(function (error) {
            console.error(error)
        })
}

async function albumTracks(query) {
    const options = {
        method: 'GET',
        url: 'https://spotify23.p.rapidapi.com/album_tracks/',
        params: { id: query, offset: '0', limit: '300' },
        headers: {
            'X-RapidAPI-Key':
                '36d6b3b414msh94a1346fad7635cp16fb36jsn0db17682a54a',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
        },
    }

    return axios
        .request(options)
        .then((response) => {
            return response.data.data
        })
        .catch(function (error) {
            console.error(error)
        })
}
