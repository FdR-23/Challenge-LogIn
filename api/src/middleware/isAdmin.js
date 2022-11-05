
const jwt = require('jsonwebtoken')
const userSchema = require('../model/user.js')

const JWTSECRET = process.env.JWTSECRET;


const isAdmin = async (req, res, next) => {
    const token = req.headers['access-token']
    try {
        if (!token) {
            return res
                .status(403)
                .json({ message: 'Token not provided' })
        }
        const decoded = jwt.verify(token, JWTSECRET)
        const user = await userSchema.findById(decoded.id, { password: 0 })
        if (user.role !== 'admin') {
            return res
                .status(403)
                .json({ message: "Require Admin Role!" });
        }
        return next()

    } catch (error) {
        return res
            .status(401)
            .json({ message: 'Unauthorized Require Admin Role!'  })
    }

}


module.exports = isAdmin