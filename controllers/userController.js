const { User } = require("../models")
const { comparePassword, generateToken } = require("../helper/helper")

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
}

module.exports = userController