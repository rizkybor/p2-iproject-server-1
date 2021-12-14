const { User, Bookmark } = require("../models")
const footballAPI = require("../apis/football")
// const axios = require('axios')

class indexControllers {
    static async getFixture (req, res, next) {
        try {
            const {dates} = req.params
            const fixture = await footballAPI({
                method: 'GET',
                url: '/fixtures',
                params: {date: `${dates}`}
            });
            
            console.(fixture)
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
}

module.exports = indexControllers