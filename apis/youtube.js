const axios = require('axios')

const youtubeSearch = axios.create({
    baseURL: "https://youtube-search-results.p.rapidapi.com",
    headers: {
    'x-rapidapi-host': 'youtube-search-results.p.rapidapi.com',
    'x-rapidapi-key': '27b1150a9emshca742ce59c4e066p1ee1cdjsnbd43412d94b3'
    }
})

module.exports = youtubeSearch