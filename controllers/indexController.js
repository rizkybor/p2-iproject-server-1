const { User, Bookmark } = require("../models")
const footballAPI = require("../apis/football")
const bettingOdds = require("../apis/bettingOdds")

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
            res.status(200).json(fetchFixture)
        }
        catch(err){
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
}

module.exports = indexControllers