const userSchema = require('../model/user.js')
const roleSchema = require('../model/role.js')

const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;


const signUp = async (req, res) => {
    const { username, email, password, role } = req.body;
    try {
        const newUser = userSchema({
            username,
            email,
            password,
        })
        if (!role) {
            const foundRole = await roleSchema.findOne({ name: 'user' })
            newUser.role = foundRole.name
        } 

        const savedUser = await newUser.save();
        const token = jwt.sign({ id: savedUser._id }, SECRET, {
            expiresIn: 86400 //24 hours
        })
        res
            .status(200)
            .json({ token });

    } catch (error) {
        res
            .status(400)
            .json(error)

    }
}




const logIn = async (req, res) => {
    res.json('logIn')
}



module.exports = {
    signUp,
    logIn,
};