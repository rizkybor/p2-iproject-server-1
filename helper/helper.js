const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')

function hashedPassword(password){
    const salt = bcrypt.genSaltSync(8)
    return bcrypt.hashSync(password, salt)
}

function comparePassword(password, passwordHashed) {
    return bcrypt.compareSync(password, passwordHashed)
}


const generateToken = ((payload) => {
    return jwt.sign(payload, process.env.RAHASIA)
  })
  
const verifyToken = ((token) => {
    return jwt.verify(token, process.env.RAHASIA)
  })

module.exports = {
    hashedPassword,
    comparePassword,
    generateToken,
    verifyToken
}
