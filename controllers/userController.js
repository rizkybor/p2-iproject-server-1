const { User } = require("../models")

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
            console.log ('testing')
        }
        catch(err){
            next(err)
        }
    }
}

module.exports = userController