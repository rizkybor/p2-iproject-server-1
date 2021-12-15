const { User } = require("../models")
const { comparePassword, generateToken } = require("../helper/helper")
const { OAuth2Client } = require('google-auth-library')

class userController {
    static async register (req, res, next) {
        try {
            const { username, email, password, role } = req.body
            const newUser = await User.create({
                username,
                email,
                password,
                role
            })
            if (newUser) {
                res.status(201).json({
                    message: 'Registrasi Berhasil',
                    id: newUser.id,
                    email: newUser.email,
                    role: newUser.role
                })
            }
        }
        catch(err){
            next(err)
        }
    }

    static async login (req, res, next) {
        try {
            const { email, password } = req.body
            const user = await User.findOne({where: { email }})
            if (!user) {
                throw({ name: 'invalid'})
            }
    
            let isValidPassword = comparePassword(password, user.password)
            if (!isValidPassword){
                throw({ name: 'invalid'})
            }

            let tokenPayload = ({id: user.id, username: user.username, email: user.email, role: user.role})
            let access_token = generateToken(tokenPayload)
            res.status(200).json({
                message: 'login berhasil',
                username: tokenPayload.username,
                email: tokenPayload.email,
                role: tokenPayload.role,
                token: access_token})
        }
        catch(err){
            next(err)
        }
        
    }

    static async authGoogle (req, res, next) {
        try{
            const {idToken} = req.body
            const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
            
            const ticket = await client.verifyIdToken({
                idToken: idToken,
                audience: process.env.GOOGLE_CLIENT_ID
            });
            
            const email = ticket.payload.email
            
            let [ user, created ] = await User.findOrCreate({
                where: { email },
                defaults: { 
                    username: ticket.payload.name,
                    email: email,
                    password: Math.random().toString(36).substring(2,12),
                    role: 'author',
                }
            })
           
            if (!user){
                throw { name : 'not found'}
            }

            let tokenPayload = ({id: user.id, username: user.username, email: user.email, role: user.role})
            let access_token = generateToken(tokenPayload)
            
            res.status(200).json({
                message: 'login berhasil',
                username: ticket.payload.name,
                email: email,
                role: user.role,
                token: access_token})
        }
        catch(err){
            next(err)
        }
    }

}

module.exports = userController