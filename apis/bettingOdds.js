const axios = require('axios')

const bettingOdds = axios.create({
    baseURL: "https://football-betting-odds1.p.rapidapi.com",
    headers: {
        'x-rapidapi-host': 'football-betting-odds1.p.rapidapi.com',
        'x-rapidapi-key': '27b1150a9emshca742ce59c4e066p1ee1cdjsnbd43412d94b3'
    }
})

module.exports = bettingOdds