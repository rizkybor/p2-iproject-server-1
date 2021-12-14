const bcrypt = require("bcryptjs")

function hashedPassword(password){
    const salt = bcrypt.genSaltSync(8)
    return bcrypt.hashSync(password, salt)
}

module.exports = {
    hashedPassword,
}
