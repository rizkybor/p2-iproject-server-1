const { User, Bookmark } = require("../models")
const footballAPI = require("../apis/football")
const bettingOdds = require("../apis/bettingOdds")
const youtubeSearch = require("../apis/youtube")

class indexControllers {
    static async getFixture (req, res, next) {
        try {
            const {date} = req.params

            const fixture = await footballAPI({
                method: 'GET',
                url: '/fixtures',
                params: {date: `${date}`}
            });
            const fetchFixture = fixture.data.response

            const result = fetchFixture.map((value)=>{
                let data = {
                    id: value.fixture.id,
                    date: new Date(value.fixture.date).toLocaleDateString(),
                    time: new Date(value.fixture.date).toLocaleString({timeZone: "'Asia/Jakarta'"}).slice(11),
                    stadium: value.fixture.venue.name,
                    statusMatch: value.fixture.status.long,
                    leagueName: value.league.name,
                    home: value.teams.home,
                    away: value.teams.away,
                    scoreHalftime: {
                        Home: value.score.halftime.home,
                        Away: value.score.halftime.away,
                    },
                    scoreFulltime: {
                        Home: value.score.fulltime.home,
                        Away: value.score.fulltime.away,
                    }
                }
                return data
            })

            res.status(200).json(result)
          
        }
        catch(err){
            console.log(err)
            next (err)
        }
    }
    
    static async getLeague (req, res, next) {
        try {
            const league = await footballAPI({
                method: 'GET',
                url: '/leagues',
            });
            const fetchLeague = league.data.response
            
            let tampung = []
            fetchLeague.forEach(element => {
                tampung.push(element.league)
            });
            const dataLeague = [...tampung]
            
            res.status(200).json(dataLeague)
        }
        catch(err){
            next (err)
        }
    }

    static async getLeagueByCountry (req, res, next) {
        try {
            const {country} = req.params

            const league = await footballAPI({
                method: 'GET',
                url: '/leagues',
                params: {country: `${country}`},
            });
            const fetchLeagueByCountry = league.data.response[0].league
            res.status(200).json(fetchLeagueByCountry)
        }
        catch(err){
            next (err)
        }
    }

    static async postBookmark (req, res, next) {
        try {
            console.log('testing')
        }
        catch(err){
            next (err)
        }
    }

    static async getBookmark (req, res, next) {
        try {
            console.log('testing')
        }
        catch(err){
            next (err)
        }
    }

    static async getOdds (req, res, next) {
        try {
          
            const oddsData = await bettingOdds({
                method: 'GET',
                url: '/oddsnames',
            });
            res.status(200).json(oddsData.data)
        }
        catch(err){
            next (err)
        }
    }

    static async searchtrailer (req, res, next) {
        try {
            const {query} = req.params

            const video = await youtubeSearch({
                method: 'GET',
                url: '/youtube-search/',
                params: {q: `${query}`},
            });

            const resultVideo = video.data.items

            let videoTrailer = {}
            resultVideo.forEach((el)=>{
                videoTrailer = el.url
            })
            res.status(200).json(videoTrailer)
        }
        catch(err){
            next(err)
        }
    }
}

module.exports = indexControllers