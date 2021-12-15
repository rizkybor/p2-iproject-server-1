const routes = require('express').Router()

const userController = require("../controllers/userController")
const indexController = require("../controllers/indexController")
const errorHandler = require("../errorHandler/index")

routes.post("/register", userController.register)
routes.post("/login", userController.login)
routes.post('/authGoogle', userController.authGoogle)

routes.get("/fixture/:date", indexController.getFixture)
routes.get("/league", indexController.getLeague)
routes.get("/league/:country", indexController.getLeagueByCountry)

routes.use(errorHandler)

module.exports = routes