const axios = require('axios')

const footballAPI = axios.create({
    baseURL: "https://api-football-v1.p.rapidapi.com/v3",
    headers: {
        'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
        'x-rapidapi-key': '27b1150a9emshca742ce59c4e066p1ee1cdjsnbd43412d94b3'

    }    })

module.exports = footballAPI